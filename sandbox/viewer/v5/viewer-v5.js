// ─── Configuration ────────────────────────────────────────────────────────────
const VIEWER_CONFIG = {
    // 'round' → circular buttons  |  'square' → squared-off buttons
    arrowStyle: 'round',

    // ms before arrows + counter fade out after last interaction
    controlsHideDelay: 1500,
};
// ──────────────────────────────────────────────────────────────────────────────

/**
 * viewer-v5.js — EnhancedViewer
 *
 * Image source model:
 *   Each article owns a <div class="set" data-set-id="..."> containing
 *   <img data-src="url"> items. The viewer reads that set when the tile opens.
 *
 *   Future state: data-set-id maps to an API endpoint. The page (or a loader)
 *   fetches the set by ID and populates the <img data-src> items before or
 *   after the viewer opens. The viewer itself is agnostic to how the set
 *   was populated — it just reads whatever <img data-src> items are present.
 *
 *   Single-image articles work identically — just one <img data-src> in the set.
 *   If no .set is found, falls back to the article's background-image.
 */
class EnhancedViewer {
    constructor() {
        this.currentViewer = null;
        this.currentImageIndex = 0;
        this.images = [];
        this.isAnimating = false;
        this._hideControlsTimer = null;
        this.init();
    }

    init() {
        this.attachViewerListeners();
    }

    attachViewerListeners() {
        document.querySelectorAll('article').forEach(article => {
            const link = article.querySelector('.post-link');
            if (!link) return;

            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);

            newLink.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                this.openViewer(article);
            });
        });
    }

    // ─── Image Resolution ────────────────────────────────────────────────────────

    /**
     * Resolve the image collection for an article.
     *
     * Priority:
     *   1. .set > [data-src]  — explicit per-article image set (primary pattern)
     *   2. background-image   — fallback for articles without a .set yet
     *
     * The .set element carries a data-set-id attribute for future API hydration.
     * Its <img data-src> items are the source of truth for the viewer.
     */
    getImages(article) {
        const setEl = article.querySelector('.set');
        if (setEl) {
            const items = setEl.querySelectorAll('[data-src]');
            if (items.length) {
                return Array.from(items).map(el => el.dataset.src).filter(Boolean);
            }
        }

        // Fallback: single background-image from the tile
        const style = article.getAttribute('style') || '';
        const match = style.match(/url\(['"]?(.*?)['"]?\)/i);
        if (match && match[1]) return [match[1]];

        return [];
    }

    // ─── Open / Close ─────────────────────────────────────────────────────────

    openViewer(article) {
        if (this.currentViewer) this.closeViewer();

        this.images = this.getImages(article);
        if (!this.images.length) {
            console.warn('EnhancedViewer: no images found for article', article);
            return;
        }

        this.currentImageIndex = 0;
        this.isAnimating = false;

        const viewerContent = this.getViewerContent(article);

        // Overlay
        const viewerOverlay = document.createElement('div');
        viewerOverlay.className = 'viewer-overlay';
        viewerOverlay.setAttribute('aria-hidden', 'false');
        viewerOverlay.setAttribute('aria-label', 'Enhanced Image Viewer');

        // Container
        const viewerContainer = document.createElement('div');
        viewerContainer.className = 'viewer-container';

        // Parts
        const closeButton = this.createCloseButton();
        const contentArea = this.createContentArea(viewerContent);
        const imageArea = this.createImageArea(this.images);

        viewerContainer.appendChild(closeButton);
        viewerContainer.appendChild(contentArea);
        viewerContainer.appendChild(imageArea);
        viewerOverlay.appendChild(viewerContainer);

        document.body.appendChild(viewerOverlay);
        document.body.style.overflow = 'hidden';

        this.currentViewer = viewerOverlay;

        this.addViewerEventListeners(viewerOverlay, closeButton);

        // Trigger entrance animation on first image
        requestAnimationFrame(() => {
            const track = viewerOverlay.querySelector('.viewer-image-track');
            if (track) track.style.transform = 'translateY(0)';
        });
    }

    closeViewer() {
        if (!this.currentViewer) return;
        if (this.currentViewer._keyHandler) {
            document.removeEventListener('keydown', this.currentViewer._keyHandler);
        }
        clearTimeout(this._hideControlsTimer);
        document.body.removeChild(this.currentViewer);
        document.body.style.overflow = '';
        this.currentViewer = null;
        this.images = [];
        this.currentImageIndex = 0;
        this.isAnimating = false;
    }

    // ─── Content Extraction ───────────────────────────────────────────────────

    getViewerContent(article) {
        const viewerContentEl = article.querySelector('.viewer-content');
        if (viewerContentEl) {
            const titleEl = viewerContentEl.querySelector('.viewer-title');
            const categoryEl = viewerContentEl.querySelector('.viewer-category');
            const locationEl = viewerContentEl.querySelector('.viewer-location');
            const descriptionEl = viewerContentEl.querySelector('.viewer-description');

            return {
                title: titleEl ? titleEl.textContent : (article.querySelector('h2') || {}).textContent || 'Untitled',
                category: categoryEl ? categoryEl.textContent : (article.querySelector('.cat') || {}).textContent || '',
                location: locationEl ? locationEl.textContent : '',
                description: descriptionEl ? descriptionEl.innerHTML : viewerContentEl.innerHTML,
            };
        }

        return {
            title: (article.querySelector('h2') || {}).textContent || 'Untitled',
            category: (article.querySelector('.cat') || {}).textContent || '',
            location: '',
            description: '<p>No description available.</p>',
        };
    }

    // ─── DOM Builders ─────────────────────────────────────────────────────────

    createCloseButton() {
        const btn = document.createElement('button');
        btn.className = 'viewer-close';
        btn.setAttribute('aria-label', 'Close viewer');
        btn.innerHTML = '&times; <span class="context">Close</span>';
        return btn;
    }

    createContentArea(content) {
        const contentArea = document.createElement('div');
        contentArea.className = 'viewer-content-area';
        contentArea.innerHTML = `
            <header class="viewer-header">
                <div class="viewer-meta">
                    <span class="viewer-category">${this.escapeHtml(content.category || '')}</span>
                    <span class="viewer-location">${this.escapeHtml(content.location || '')}</span>
                </div>
                <h2 class="viewer-title">${this.escapeHtml(content.title || '')}</h2>
            </header>
            <div class="viewer-description">
                ${content.description || '<p>No additional details available.</p>'}
            </div>
            <nav class="viewer-nav" style="display: none;">
                <button class="viewer-nav-btn prev" aria-label="Previous project">Previous</button>
                <button class="viewer-nav-btn next" aria-label="Next project">Next</button>
            </nav>
            <br/><br/>
        `;
        return contentArea;
    }

    /**
     * Build the image area.
     * - If 1 image  → simple background-image div, no controls.
     * - If 2+ images → vertical snapping track + dot indicators + arrow buttons.
     */
    createImageArea(images) {
        const imageArea = document.createElement('div');
        imageArea.className = 'viewer-image-area';

        if (images.length === 1) {
            // ── Single image ──────────────────────────────────────────────────
            const container = document.createElement('div');
            container.className = 'viewer-image-container';
            container.style.backgroundImage = `url('${images[0]}')`;
            imageArea.appendChild(container);
        } else {
            // ── Multi-image gallery ───────────────────────────────────────────
            imageArea.classList.add('viewer-image-area--gallery');
            imageArea.classList.add(`viewer-arrows--${VIEWER_CONFIG.arrowStyle}`);

            // Track that slides vertically
            const track = document.createElement('div');
            track.className = 'viewer-image-track';
            // Dynamic height: n slides × 100% of the image area
            track.style.height = `${images.length * 100}%`;

            images.forEach((url, i) => {
                const slide = document.createElement('div');
                slide.className = 'viewer-image-slide';
                slide.dataset.index = i;
                slide.style.backgroundImage = `url('${url}')`;
                slide.style.height = `${100 / images.length}%`;
                track.appendChild(slide);
            });

            // Dot indicators
            const dots = document.createElement('div');
            dots.className = 'viewer-image-dots';
            images.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.className = 'viewer-image-dot' + (i === 0 ? ' is-active' : '');
                dot.setAttribute('aria-label', `Go to image ${i + 1}`);
                dot.addEventListener('click', () => this.goToImage(i));
                dots.appendChild(dot);
            });

            // Arrow buttons (prev / next)
            const prevArrow = document.createElement('button');
            prevArrow.className = 'viewer-image-arrow viewer-image-arrow--prev';
            prevArrow.setAttribute('aria-label', 'Previous image');
            prevArrow.innerHTML = '&#8593;'; // ↑
            prevArrow.addEventListener('click', () => this.navigate(-1));

            const nextArrow = document.createElement('button');
            nextArrow.className = 'viewer-image-arrow viewer-image-arrow--next';
            nextArrow.setAttribute('aria-label', 'Next image');
            nextArrow.innerHTML = '&#8595;'; // ↓
            nextArrow.addEventListener('click', () => this.navigate(1));

            // Image count label
            const counter = document.createElement('div');
            counter.className = 'viewer-image-counter';
            counter.textContent = `1 / ${images.length}`;

            imageArea.appendChild(prevArrow);
            imageArea.appendChild(track);
            imageArea.appendChild(nextArrow);
            imageArea.appendChild(dots);
            imageArea.appendChild(counter);

            // Scroll → snap
            this._attachScrollSnap(imageArea);

            // Touch → snap
            this._attachTouchSnap(imageArea);

            // Auto-hide controls after idle
            this._attachControlsAutoHide(imageArea);
        }

        return imageArea;
    }

    // ─── Controls Auto-hide ───────────────────────────────────────────────────

    _attachControlsAutoHide(imageArea) {
        imageArea.addEventListener('mouseenter', () => this._showControls());
        imageArea.addEventListener('mouseleave', () => this._scheduleHideControls());
        imageArea.addEventListener('mousemove', () => this._showControls());
    }

    _showControls() {
        if (!this.currentViewer) return;
        clearTimeout(this._hideControlsTimer);
        this.currentViewer.querySelectorAll(
            '.viewer-image-arrow, .viewer-image-counter'
        ).forEach(el => el.classList.add('is-visible'));
        this._scheduleHideControls();
    }

    _scheduleHideControls() {
        clearTimeout(this._hideControlsTimer);
        this._hideControlsTimer = setTimeout(() => {
            if (!this.currentViewer) return;
            this.currentViewer.querySelectorAll(
                '.viewer-image-arrow, .viewer-image-counter'
            ).forEach(el => el.classList.remove('is-visible'));
        }, VIEWER_CONFIG.controlsHideDelay);
    }

    // ─── Snapping Input Handlers ──────────────────────────────────────────────

    _attachScrollSnap(imageArea) {
        let scrollAccum = 0;
        const THRESHOLD = 40; // px of deltaY before triggering

        imageArea.addEventListener('wheel', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (this.isAnimating) return;
            this._showControls();
            scrollAccum += e.deltaY;

            if (scrollAccum >= THRESHOLD) {
                this.navigate(1);
                scrollAccum = 0;
            } else if (scrollAccum <= -THRESHOLD) {
                this.navigate(-1);
                scrollAccum = 0;
            }
        }, { passive: false });
    }

    _attachTouchSnap(imageArea) {
        let touchStartY = 0;
        const SWIPE_THRESHOLD = 40;

        imageArea.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        imageArea.addEventListener('touchend', (e) => {
            if (this.isAnimating) return;
            const diff = touchStartY - e.changedTouches[0].clientY;
            if (Math.abs(diff) >= SWIPE_THRESHOLD) {
                this.navigate(diff > 0 ? 1 : -1);
            }
        }, { passive: true });
    }

    // ─── Navigation ───────────────────────────────────────────────────────────

    navigate(direction) {
        if (!this.currentViewer || this.isAnimating) return;
        const newIndex = this.currentImageIndex + direction;
        if (newIndex < 0 || newIndex >= this.images.length) return;
        this.goToImage(newIndex);
    }

    goToImage(index) {
        if (!this.currentViewer || this.isAnimating) return;
        if (index < 0 || index >= this.images.length) return;
        if (index === this.currentImageIndex) return;

        this.isAnimating = true;
        this._showControls();

        const track = this.currentViewer.querySelector('.viewer-image-track');
        if (!track) { this.isAnimating = false; return; }

        const stepPct = 100 / this.images.length; // each slide is 1/n of the track
        const pct = -(index * stepPct);
        track.style.transform = `translateY(${pct}%)`;

        this.currentImageIndex = index;

        // Update dots
        this.currentViewer.querySelectorAll('.viewer-image-dot').forEach((dot, i) => {
            dot.classList.toggle('is-active', i === index);
        });

        // Update counter
        const counter = this.currentViewer.querySelector('.viewer-image-counter');
        if (counter) counter.textContent = `${index + 1} / ${this.images.length}`;

        // Update arrow visibility
        const prev = this.currentViewer.querySelector('.viewer-image-arrow--prev');
        const next = this.currentViewer.querySelector('.viewer-image-arrow--next');
        if (prev) prev.style.opacity = index === 0 ? '0.3' : '1';
        if (next) next.style.opacity = index === this.images.length - 1 ? '0.3' : '1';

        // Unlock after CSS transition ends (~420ms)
        setTimeout(() => { this.isAnimating = false; }, 450);
    }

    // ─── Event Listeners ──────────────────────────────────────────────────────

    addViewerEventListeners(viewerOverlay, closeButton) {
        const close = () => this.closeViewer();

        closeButton.addEventListener('click', close);

        viewerOverlay.addEventListener('click', (e) => {
            if (e.target === viewerOverlay) close();
        });

        const keyHandler = (e) => {
            if (!this.currentViewer) return;
            switch (e.key) {
                case 'Escape':
                    close();
                    break;
                case 'ArrowUp':
                    this.navigate(-1);
                    break;
                case 'ArrowDown':
                    this.navigate(1);
                    break;
                case 'ArrowLeft':
                    this.navigate(-1);
                    break;
                case 'ArrowRight':
                    this.navigate(1);
                    break;
            }
        };

        document.addEventListener('keydown', keyHandler);
        viewerOverlay._keyHandler = keyHandler;
    }

    // ─── Helpers ──────────────────────────────────────────────────────────────

    escapeHtml(unsafe) {
        if (!unsafe) return '';
        return unsafe
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing EnhancedViewer v5...');
    window.enhancedViewer = new EnhancedViewer();
});