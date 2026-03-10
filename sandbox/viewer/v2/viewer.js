/* =========================================================
   CONFIG
   ========================================================= */

const VIEWER_CONFIG = {
    showViewerNav: true
};

/* =========================================================
   STATE
   ========================================================= */

const viewerSources = Array.from(document.querySelectorAll('.post-link'));
let currentViewerIndex = -1;
let viewerOverlay = null;

/* =========================================================
   TILE CLICK BINDING
   ========================================================= */

viewerSources.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        openViewer(index);
    });
});

/* =========================================================
   OPEN / CLOSE
   ========================================================= */

function openViewer(index) {
    // If viewer already open, just update content
    if (viewerOverlay) {
        updateViewer(index);
        return;
    }

    currentViewerIndex = index;

    viewerOverlay = document.createElement('div');
    viewerOverlay.className = 'viewer-overlay';

    viewerOverlay.innerHTML = `
        <div class="viewer-container">
            <div class="viewer-content-area"></div>
            <div class="viewer-image-area"></div>
            <button class="viewer-close">
                &times;<span class="context">Close</span>
            </button>
        </div>
    `;

    document.body.appendChild(viewerOverlay);

    viewerOverlay
        .querySelector('.viewer-close')
        .addEventListener('click', closeViewer);

    viewerOverlay.addEventListener('click', (e) => {
        if (e.target === viewerOverlay) closeViewer();
    });

    updateViewer(index);
}

function closeViewer() {
    if (!viewerOverlay) return;

    viewerOverlay.remove();
    viewerOverlay = null;
    currentViewerIndex = -1;
}

/* =========================================================
   UPDATE VIEWER CONTENT (NO DOM LEAKS)
   ========================================================= */

function updateViewer(index) {
    currentViewerIndex = index;

    const link = viewerSources[index];
    const article = link.closest('article');
    const source = article.querySelector('.viewer-content');

    const contentArea = viewerOverlay.querySelector('.viewer-content-area');
    const imageArea = viewerOverlay.querySelector('.viewer-image-area');

    // Hard reset every time
    contentArea.innerHTML = '';
    imageArea.innerHTML = '';

    buildViewerContent(source, contentArea);
    buildViewerImages(article, imageArea);
}

/* =========================================================
   CONTENT BUILDER (HEADER + META FROM MARKUP)
   ========================================================= */

function buildViewerContent(source, target) {
    if (!source) return;

    const category =
        source.querySelector('.cat') ? .textContent || '';

    const title =
        source.querySelector('.viewer-title') ? .textContent || '';

    const location =
        source.querySelector('.viewer-location') ? .textContent || '';

    const description =
        source.querySelector('.viewer-description');

    /* ---------- HEADER ---------- */

    const header = document.createElement('header');
    header.className = 'viewer-header';

    if (category || location) {
        const meta = document.createElement('div');
        meta.className = 'viewer-meta';

        if (category) {
            const cat = document.createElement('span');
            cat.className = 'viewer-category';
            cat.textContent = category;
            meta.appendChild(cat);
        }

        if (location) {
            const loc = document.createElement('span');