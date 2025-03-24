function play(screenId) {
    putLoudspeakersOn();
    startGame(screenId);
}

function putLoudspeakersOn() {
    const loudspeakerOffRef = document.getElementById('volumeOff');
    const loudspeakerOnRef = document.getElementById('volumeOn');

    loudspeakerOffRef.classList.add('d-none');
    loudspeakerOnRef.classList.remove('d-none');
}

function startGame(screenId) {
    stopScreen(screenId);
    showGameScreen();
    showLoadingSpinner();
    initLevel1();
    setTimeout(() => {
        init();
        hideLoadingSpinner();
    }, 2000);
    touchscreenGameBtns();
}

function stopScreen(screenId) {
    const screen = document.getElementById(screenId);

    if (screen) {
        screen.classList.add('d-none');
        if (screenId === 'startScreen') {
            screen.style.display = 'none';
        }
    }
}

function showGameScreen() {
    const displayGameScreen = document.getElementById('gameScreen');
    const gameNameRef = document.getElementById('gameName');

    displayGameScreen.classList.remove('d-none');
    gameNameRef.classList.add('d-none');
}

function showLoadingSpinner() {
    const spinnerRef = document.getElementById('loadingSpinner');

    spinnerRef.style.display = 'flex';
}

function hideLoadingSpinner() {
    const spinnerRef = document.getElementById('loadingSpinner');

    spinnerRef.style.display = 'none';
}

function touchscreenGameBtns() {
    if (window.innerWidth < 720 || window.innerHeight < 480) {
        const mobileBtnRef = document.getElementById('mobileBtns');

        mobileBtnRef.style.display = 'flex';
    } else if (window.innerWidth > 720 || window.innerHeight > 480) {
        const mobileBtnRef = document.getElementById('mobileBtns');

        mobileBtnRef.style.display = 'none';
    }
}

function playSoundByStatus() {
    const soundStatus = sessionStorage.getItem('soundStatus');

    if (soundStatus === 'off') {
        stopAllAudios();
    } else {
        backgroundHappy.play();
    }
}

function showInstructions() {
    const blackOverlayRef = document.getElementById('blackOverlay');

    blackOverlayRef.classList.remove('d-none');
    blackOverlayRef.classList.add('black-overlay');
    handleScrollbar();
}

function closeOverlay() {
    const blackOverlayRef = document.getElementById('blackOverlay');

    blackOverlayRef.classList.toggle('d-none');
    blackOverlayRef.classList.toggle('black-overlay');
}

function handleScrollbar() {
    const blackOverlayRef = document.getElementById('blackOverlay');

    blackOverlayRef.classList.contains('d-none') ? document.body.classList.remove('overlay-active') :
        document.body.classList.add('overlay-active');
}