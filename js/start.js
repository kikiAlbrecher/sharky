function startGame(screenId) {
    stopScreen(screenId);
    backgroundHappy.play();
    showCanvas();
    showLoadingSpinner();
    initLevel1();
    setTimeout(() => {
        init();
        hideLoadingSpinner();
    }, 2000);
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

function showCanvas() {
    const displayCanvas = document.getElementById('canvas');

    displayCanvas.classList.remove('d-none');
}

function showLoadingSpinner() {
    const spinnerRef = document.getElementById('loadingSpinner');

    spinnerRef.style.display = 'flex';
}

function hideLoadingSpinner() {
    const spinnerRef = document.getElementById('loadingSpinner');

    spinnerRef.style.display = 'none';
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