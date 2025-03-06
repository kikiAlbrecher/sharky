function startGame() {
    stopStartScreen();
    backgroundHappy.play();
    showCanvas();
    // initLevel1();
}

function stopStartScreen() {
    const screenAtStart = document.getElementById('startScreen');

    screenAtStart.style.display = 'none';
}

function showCanvas() {
    const displayCanvas = document.getElementById('canvas');

    displayCanvas.classList.remove('d-none');
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

function restartGame() {
    const winMessage = document.getElementById('winScreen');

    winMessage.classList.add('d-none');
    showCanvas();
    // clearInterval();
    // initLevel1();
}