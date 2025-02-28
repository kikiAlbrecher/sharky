function startGame() {

    stopStartScreen();
    showCanvas();
    // initLevel1();
}

function stopStartScreen() {
    let screenAtStart = document.getElementById('startScreen');
    screenAtStart.style.display = 'none';
}

function showCanvas() {
    let displayCanvas = document.getElementById('canvas');
    displayCanvas.classList.remove('d-none');
}