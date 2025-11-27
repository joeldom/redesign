let countdownInterval;
let streamData = {};
let currentScreen = 'setup';

const screens = {
    setup: document.querySelector('.setup-screen'),
    timer: document.querySelector('.timer-screen'),
    launch: document.querySelector('.launch-screen')
};

// Initialize Choices.js for custom dropdowns
const timeSelect = new Choices('#timeSelect', {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    allowHTML: false
});

const bgStyleSelect = new Choices('#bgStyle', {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    allowHTML: false
});

// Live background preview on setup screen
const defaultBgUrl = 'https://joeldom.github.io/asset/images/r/beyond-matrix.gif';
const setupBgPreview = document.getElementById('setupBackgroundPreview');
const bgUrlInput = document.getElementById('backgroundUrl');
const bgStyleInput = document.getElementById('bgStyle');

// Don't set initial background - leave it empty

// Update background preview as user types
bgUrlInput.addEventListener('input', function() {
    const inputValue = this.value.trim().toLowerCase();

    if (inputValue === 'default') {
        setupBgPreview.style.backgroundImage = `url('${defaultBgUrl}')`;
    } else if (inputValue === '') {
        setupBgPreview.style.backgroundImage = 'none';
    } else {
        setupBgPreview.style.backgroundImage = `url('${this.value.trim()}')`;
    }
});

// Update background style as user changes dropdown
bgStyleInput.addEventListener('change', function() {
    setupBgPreview.className = 'background-preview ' + this.value;
});

// Also listen to Choices.js change event
document.getElementById('bgStyle').addEventListener('change', function() {
    setupBgPreview.className = 'background-preview ' + this.value;
});

// Spacebar listener to skip to launch, ESC to go back
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space' && currentScreen === 'timer') {
        e.preventDefault();
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
        launchStream();
    }

    if (e.code === 'Escape' && (currentScreen === 'timer' || currentScreen === 'launch')) {
        e.preventDefault();
        resetToSetup();
    }
});

function switchScreen(from, to) {
    screens[from].classList.remove('active');
    currentScreen = to;
    setTimeout(() => {
        screens[to].classList.add('active');
    }, 200);
}

document.getElementById('setupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const customBgUrl = document.getElementById('backgroundUrl').value.trim();
    const defaultBgUrl = 'https://joeldom.github.io/asset/images/r/beyond-matrix.gif';
    const bgStyle = document.getElementById('bgStyle').value;

    streamData = {
        title: document.getElementById('title').value,
        minutes: parseFloat(document.getElementById('timeSelect').value),
        launchMsg: document.getElementById('launchMsg').value,
        backgroundUrl: customBgUrl || defaultBgUrl,
        backgroundStyle: bgStyle
    };

    document.getElementById('displayTitle').textContent = streamData.title;

    const bgElement = document.getElementById('backgroundContainer');
    bgElement.style.backgroundImage = `url('${streamData.backgroundUrl}')`;
    bgElement.className = 'background-container ' + streamData.backgroundStyle;

    switchScreen('setup', 'timer');
    startCountdown(streamData.minutes);
});

function startCountdown(minutes) {
    let totalMilliseconds = minutes * 60 * 1000;
    const startTime = Date.now();
    const endTime = startTime + totalMilliseconds;

    function updateDisplay() {
        const now = Date.now();
        const remaining = endTime - now;

        if (remaining <= 0) {
            document.getElementById('timerDisplay').textContent = '00:00';
            document.getElementById('millisDisplay').textContent = '.000';
            clearInterval(countdownInterval);
            launchStream();
            return;
        }

        const mins = Math.floor(remaining / 60000);
        const secs = Math.floor((remaining % 60000) / 1000);
        const ms = Math.floor((remaining % 1000));

        document.getElementById('timerDisplay').textContent =
            `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
        document.getElementById('millisDisplay').textContent =
            `.${String(ms).padStart(3, '0')}`;
    }

    updateDisplay();
    countdownInterval = setInterval(updateDisplay, 10);
}

function launchStream() {
    document.getElementById('displayLaunchMsg').textContent = streamData.launchMsg;
    switchScreen('timer', 'launch');
}

function resetToSetup() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    const fromScreen = currentScreen;

    switchScreen(fromScreen, 'setup');

    document.getElementById('setupForm').reset();
    document.getElementById('timerDisplay').textContent = '00:00';
    document.getElementById('millisDisplay').textContent = '.000';
}