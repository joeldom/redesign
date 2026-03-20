var myVideo = document.getElementById("gundam");

function playPause() {
    if (myVideo.paused)
        myVideo.play();
    else
        myVideo.pause();
};

// ===== CONFIGURATION =====
const CONFIG = {
    IDLE_DELAY: 2000, // ⏱ time (ms) before video appears after no movement
    ACTIVE_DELAY: 100, // ⚡ time (ms) before video hides after movement
    HIDE_DELAY: 800, // 🎛 time (ms) before controls hide AFTER interaction
    HOVER_DELAY: 50, // 🖱 delay (ms) before controls appear on hover
    HIDE_BUTTONS_ON_IDLE: true // 🧱 toggle page UI visibility when video is active
};

// ===== STATE =====
let idleTimer = null; // controls video show (idle)
let activeTimer = null; // controls video hide (movement)
let controlsTimer = null; // controls fade-out of controls
let hoverTimer = null; // controls hover reveal delay

let isGifVisible = false;
let isVideoPausedByUser = false;
let isHoveringControls = false;
let isVideoLocked = false; // 👁 toggle

let lastMouseMove = Date.now();

// ===== DOM =====
const mediaViewer = document.getElementById('mediaViewer');
const buttonContainer = document.getElementById('collapse1');
const mouseIndicator = document.querySelector('.mouse-indicator');
const videoControls = document.getElementById('videoControls');

const muteBtn = document.getElementById('muteBtn');
const playPauseBtn = document.getElementById('playPauseBtn');
const visibilityBtn = document.getElementById('visibilityBtn');

const video = document.getElementById('gundam');

// ===== MOUSE / TOUCH =====
function handleMouseMove(e) {
    const x = e.clientX || (e.touches && e.touches[0].clientX);
    const y = e.clientY || (e.touches && e.touches[0].clientY);
    if (!x || !y) return;

    mouseIndicator.style.left = `${x}px`;
    mouseIndicator.style.top = `${y}px`;
    mouseIndicator.classList.add('active');

    lastMouseMove = Date.now();

    clearTimeout(idleTimer);
    clearTimeout(activeTimer);
    clearTimeout(controlsTimer);

    // ===== VIDEO: FAST HIDE ON ACTIVITY =====
    if (isGifVisible && !isVideoPausedByUser && !isVideoLocked) {
        activeTimer = setTimeout(() => {
            hideVideoOnly();
        }, CONFIG.ACTIVE_DELAY);
    }

    // ===== CONTROLS: HIDE AFTER INTERACTION =====
    controlsTimer = setTimeout(() => {
        if (!isHoveringControls && !isVideoPausedByUser) {
            videoControls.classList.remove('visible');
        }
    }, CONFIG.HIDE_DELAY);

    // ===== RESET IDLE (VIDEO REAPPEAR) =====
    if (!isVideoPausedByUser && !isVideoLocked) {
        idleTimer = setTimeout(showVideo, CONFIG.IDLE_DELAY);
    }
}

// ===== SHOW VIDEO (IDLE STATE) =====
function showVideo() {
    if (isVideoPausedByUser) return;

    isGifVisible = true;

    mediaViewer.classList.add('active');
    videoControls.classList.add('visible'); // show controls initially

    // 👇 ALSO start idle hide for controls
    if (controlsTimer) clearTimeout(controlsTimer);
    controlsTimer = setTimeout(() => {
        if (!isHoveringControls) {
            videoControls.classList.remove('visible');
        }
    }, CONFIG.HIDE_DELAY);

    if (CONFIG.HIDE_BUTTONS_ON_IDLE) {
        buttonContainer.classList.add('buttons-hidden');
        buttonContainer.classList.remove('buttons-visible');
    }

    video.play().catch(() => {});
}

// ===== HIDE VIDEO (ACTIVE STATE) =====
function hideVideoOnly() {
    if (isVideoLocked) return;

    isGifVisible = false;

    mediaViewer.classList.remove('active');

    if (video && !isVideoPausedByUser) {
        video.pause();
    }

    buttonContainer.classList.remove('buttons-hidden');
    buttonContainer.classList.add('buttons-visible');
}

// ===== CONTROLS: HOVER REVEAL =====
videoControls.addEventListener('mouseenter', () => {
    isHoveringControls = true;

    clearTimeout(hoverTimer);

    hoverTimer = setTimeout(() => {
        videoControls.classList.add('visible');
    }, CONFIG.HOVER_DELAY);
});

videoControls.addEventListener('mouseleave', () => {
    isHoveringControls = false;

    clearTimeout(controlsTimer);

    controlsTimer = setTimeout(() => {
        videoControls.classList.remove('visible');
    }, CONFIG.HIDE_DELAY);
});

// ===== HOVER ANYWHERE ON VIDEO AREA =====
mediaViewer.addEventListener('mouseenter', () => {
    clearTimeout(hoverTimer);

    hoverTimer = setTimeout(() => {
        videoControls.classList.add('visible');
    }, CONFIG.HOVER_DELAY);
});

// ===== CLICK = INSTANT CONTROLS =====
mediaViewer.addEventListener('click', () => {
    videoControls.classList.add('visible');

    // restart hide timer
    if (controlsTimer) clearTimeout(controlsTimer);
    controlsTimer = setTimeout(() => {
        videoControls.classList.remove('visible');
    }, CONFIG.HIDE_DELAY);
});

// ===== 👁 VISIBILITY TOGGLE =====
visibilityBtn.addEventListener('click', () => {
    isVideoLocked = !isVideoLocked;

    if (isVideoLocked) {
        visibilityBtn.innerHTML = '<i class="fa fa-eye"></i>';
        visibilityBtn.title = 'Release video';

        showVideo();
    } else {
        visibilityBtn.innerHTML = '<i class="fa fa-eye-slash"></i>';
        visibilityBtn.title = 'Keep video visible';
    }
});

// ===== 🔊 MUTE / UNMUTE =====
muteBtn.addEventListener('click', function() {
    if (video.muted) {
        video.muted = false;
        video.volume = 1;

        video.play().then(() => {
            video.currentTime += 0.01;
        }).catch(() => {});

        muteBtn.innerHTML = '<i class="fa fa-volume-up"></i>';
    } else {
        video.muted = true;
        muteBtn.innerHTML = '<i class="fa fa-volume-mute"></i>';
    }
});

// ===== ▶️ PLAY / PAUSE =====
playPauseBtn.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';

        isVideoPausedByUser = false;

        idleTimer = setTimeout(showVideo, CONFIG.IDLE_DELAY);
    } else {
        video.pause();
        playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';

        isVideoPausedByUser = true;

        mediaViewer.classList.add('active');
        videoControls.classList.add('visible');

        clearTimeout(idleTimer);
        clearTimeout(activeTimer);
        clearTimeout(controlsTimer);
    }
});

// ===== MOUSE INDICATOR IDLE =====
function checkMouseIdle() {
    if (Date.now() - lastMouseMove > CONFIG.IDLE_DELAY + 1000) {
        mouseIndicator.classList.remove('active');
    }
}

// ===== EVENTS =====
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('touchstart', handleMouseMove);
document.addEventListener('touchmove', handleMouseMove);

setInterval(checkMouseIdle, 500);

// initial idle trigger
idleTimer = setTimeout(showVideo, CONFIG.IDLE_DELAY);

// cleanup
window.addEventListener('beforeunload', () => {
    clearTimeout(idleTimer);
    clearTimeout(activeTimer);
    clearTimeout(controlsTimer);
    clearTimeout(hoverTimer);
});

console.log('%c🎬 Interactive Background Viewer', 'font-size: 16px; font-weight: bold; color: #1a3acc;');
console.log('Config:', CONFIG);