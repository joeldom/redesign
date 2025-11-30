// Enhanced viewer component for detailed content display
class EnhancedViewer {
    constructor() {
        this.currentViewer = null;
        this.init();
    }

    init() {
        // Attach event listeners to articles
        this.attachViewerListeners();
    }

    attachViewerListeners() {
        document.querySelectorAll('article').forEach(article => {
            const link = article.querySelector('.post-link');
            if (!link) return;

            // Replace link to prevent conflicts
            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);

            newLink.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();
                this.openViewer(article);
            });
        });
    }

    openViewer(article) {
        console.log('Opening viewer for article:', article);

        // Close any existing viewer
        if (this.currentViewer) {
            this.closeViewer();
        }

        // Extract background image
        const style = article.getAttribute('style');
        const match = style.match(/url\(['"]?(.*?)['"]?\)/i);
        if (!match) {
            console.log('No background image found');
            return;
        }

        const imageUrl = match[1];
        console.log('Image URL:', imageUrl);

        // Get viewer content
        const viewerContent = this.getViewerContent(article);
        console.log('Viewer content:', viewerContent);

        // Create viewer overlay
        const viewerOverlay = document.createElement('div');
        viewerOverlay.className = 'viewer-overlay';
        viewerOverlay.setAttribute('aria-hidden', 'false');
        viewerOverlay.setAttribute('aria-label', 'Enhanced Image Viewer');

        // Create viewer container
        const viewerContainer = document.createElement('div');
        viewerContainer.className = 'viewer-container';

        // Create close button
        const closeButton = this.createCloseButton();

        // Create content area
        const contentArea = this.createContentArea(viewerContent);

        // Create image area
        const imageArea = this.createImageArea(imageUrl);

        // Assemble viewer
        viewerContainer.appendChild(closeButton);
        viewerContainer.appendChild(contentArea);
        viewerContainer.appendChild(imageArea);
        viewerOverlay.appendChild(viewerContainer);

        document.body.appendChild(viewerOverlay);
        document.body.style.overflow = 'hidden';

        this.currentViewer = viewerOverlay;

        // Add event listeners
        this.addViewerEventListeners(viewerOverlay, closeButton);
    }

    getViewerContent(article) {
        console.log('Looking for viewer content in article:', article);

        // Look for semantic viewer content
        const viewerContentEl = article.querySelector('.viewer-content');
        if (viewerContentEl) {
            console.log('Found .viewer-content element:', viewerContentEl);

            // Extract content directly
            const titleEl = viewerContentEl.querySelector('.viewer-title');
            const categoryEl = viewerContentEl.querySelector('.viewer-category');
            const locationEl = viewerContentEl.querySelector('.viewer-location');
            const descriptionEl = viewerContentEl.querySelector('.viewer-description');

            const title = titleEl ? titleEl.textContent :
                article.querySelector('h2') ? article.querySelector('h2').textContent : 'Untitled';

            const category = categoryEl ? categoryEl.textContent :
                article.querySelector('.cat') ? article.querySelector('.cat').textContent : '';

            const location = locationEl ? locationEl.textContent : '';

            const description = descriptionEl ? descriptionEl.innerHTML : viewerContentEl.innerHTML;

            console.log('Extracted content:', { title, category, location, description });

            return {
                title: title,
                category: category,
                location: location,
                description: description
            };
        }

        // Fallback to basic content
        console.log('No .viewer-content found, using fallback');
        const titleEl = article.querySelector('h2');
        const categoryEl = article.querySelector('.cat');

        return {
            title: titleEl ? titleEl.textContent : 'Untitled',
            category: categoryEl ? categoryEl.textContent : '',
            location: '',
            description: '<p>Additional details coming soon.</p>'
        };
    }

    createCloseButton() {
        const closeButton = document.createElement('button');
        closeButton.className = 'viewer-close';
        closeButton.setAttribute('aria-label', 'Close viewer');
        closeButton.innerHTML = '&times;';
        return closeButton;
    }

    // createContentArea(content) {
    //     const contentArea = document.createElement('div');
    //     contentArea.className = 'viewer-content-area';

    //     console.log('Creating content area with:', content);

    //     const contentHTML = `
    //         <header class="viewer-header">
    //             <div class="viewer-meta">
    //                 <span class="viewer-category">${this.escapeHtml(content.category || '')}</span>
    //                 <span class="viewer-location">${this.escapeHtml(content.location || '')}</span>
    //             </div>
    //             <h2 class="viewer-title">${this.escapeHtml(content.title || '')}</h2>
    //         </header>
    //         <div class="viewer-description">
    //             ${content.description || '<p>No additional details available.</p>'}
    //         </div>
    //         <nav class="viewer-nav">
    //             <button class="viewer-nav-btn prev" aria-label="Previous project">&larr; Previous</button>
    //             <button class="viewer-nav-btn next" aria-label="Next project">Next &rarr;</button>
    //         </nav>
    //     `;

    //     contentArea.innerHTML = contentHTML;
    //     return contentArea;
    // }

    createContentArea(content) {
        const contentArea = document.createElement('div');
        contentArea.className = 'viewer-content-area';

        const contentHTML = `
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
			<!-- Remove the entire nav section -->
		`;

        contentArea.innerHTML = contentHTML;
        return contentArea;
    }

    createImageArea(imageUrl) {
        const imageArea = document.createElement('div');
        imageArea.className = 'viewer-image-area';

        const imageContainer = document.createElement('div');
        imageContainer.className = 'viewer-image-container';
        imageContainer.style.backgroundImage = `url('${imageUrl}')`;

        imageArea.appendChild(imageContainer);
        return imageArea;
    }

    addViewerEventListeners(viewerOverlay, closeButton) {
        const closeViewer = () => this.closeViewer();

        closeButton.addEventListener('click', closeViewer);
        viewerOverlay.addEventListener('click', (event) => {
            if (event.target === viewerOverlay) {
                closeViewer();
            }
        });

        // Keyboard navigation
        const keyHandler = (event) => {
            if (!this.currentViewer) return;

            switch (event.key) {
                case 'Escape':
                    closeViewer();
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
        this.currentViewer._keyHandler = keyHandler;

        // Navigation buttons
        const prevBtn = viewerOverlay.querySelector('.viewer-nav-btn.prev');
        const nextBtn = viewerOverlay.querySelector('.viewer-nav-btn.next');

        if (prevBtn) prevBtn.addEventListener('click', () => this.navigate(-1));
        if (nextBtn) nextBtn.addEventListener('click', () => this.navigate(1));
    }

    navigate(direction) {
        console.log('Navigate:', direction);
    }

    closeViewer() {
        if (this.currentViewer) {
            // Remove keyboard event listener
            if (this.currentViewer._keyHandler) {
                document.removeEventListener('keydown', this.currentViewer._keyHandler);
            }

            document.body.removeChild(this.currentViewer);
            document.body.style.overflow = '';
            this.currentViewer = null;
        }
    }

    escapeHtml(unsafe) {
        if (!unsafe) return '';
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}

// Initialize enhanced viewer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing EnhancedViewer...');
    window.enhancedViewer = new EnhancedViewer();
});