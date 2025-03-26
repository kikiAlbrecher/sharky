let world;
let canvas;
let keyboard = new Keyboard();

/**
 * Starts the game by setting up sound settings, storing the sound status, and initializing the game.
 * 
 * @param {string} screenId - The ID of the screen to hide before starting the game.
 */
function play(screenId) {
    sessionStorage.setItem('soundStatus', 'on');
    startGame(screenId);
    volumeSettings();
}

/**
 * Initializes and starts the game by hiding the current screen, displaying the game screen, showing a loading spinner,
 * and initializing the first level. 
 * The loading spinner is hidden after 2 seconds.
 *
 * @param {string} screenId - The ID of the screen to stop before starting the game.
 */
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

/**
 * Hides the screen with the specified ID.
 *
 * @param {string} screenId - The ID of the screen to hide.
 */
function stopScreen(screenId) {
    const screenRef = document.getElementById(screenId);

    if (screenRef) {
        screenRef.classList.add('d-none');
        if (screenId === 'startScreen') {
            screenRef.style.display = 'none';
        }
    }
}

/**
 * Displays the game screen and hides the h1 game name.
 */
function showGameScreen() {
    const displayGameScreen = document.getElementById('gameScreen');
    const gameNameRef = document.getElementById('gameName');

    displayGameScreen.classList.remove('d-none');
    gameNameRef.classList.add('d-none');
}

/**
 * Displays the loading spinner by changing its style to 'flex'.
 */
function showLoadingSpinner() {
    const spinnerRef = document.getElementById('loadingSpinner');

    spinnerRef.style.display = 'flex';
}

/**
 * Initializes the game environment by setting up the canvas element and creating a new World instance.
 * It binds the canvas element to the world and sets up the keyboard input for controlling the game.
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

/**
 * Hides the loading spinner by setting its display style to 'none'.
 */
function hideLoadingSpinner() {
    const spinnerRef = document.getElementById('loadingSpinner');

    spinnerRef.style.display = 'none';
}

/**
 * Displays the touchscreen buttons if the screen width or height is below 720px x 480px, otherwise hides them.
 */
function touchscreenGameBtns() {
    const mobileBtnRef = document.getElementById('mobileBtns');

    if (window.innerWidth < 720 || window.innerHeight < 480) {
        mobileBtnRef.style.display = 'flex';
    } else if (window.innerWidth > 720 || window.innerHeight > 480) {
        mobileBtnRef.style.display = 'none';
    }
}

/**
 * Displays the instructions overlay by removing the 'd-none' class and adding the 'black-overlay' class.
 * Also handles the scrollbar visibility.
 */
function showInstructions() {
    const blackOverlayRef = document.getElementById('blackOverlay');

    blackOverlayRef.classList.remove('d-none');
    blackOverlayRef.classList.add('black-overlay');
    handleScrollbar();
}

/**
 * Closes the instructions overlay by toggling the 'd-none' and 'black-overlay' classes.
 */
function closeOverlay() {
    const blackOverlayRef = document.getElementById('blackOverlay');

    blackOverlayRef.classList.toggle('d-none');
    blackOverlayRef.classList.toggle('black-overlay');
}

/**
 * Handles the visibility of the scrollbar when the overlay is active.
 * If the overlay is shown, it adds 'overlay-active' class to the body, else removes it.
 */
function handleScrollbar() {
    const blackOverlayRef = document.getElementById('blackOverlay');

    blackOverlayRef.classList.contains('d-none') ? document.body.classList.remove('overlay-active') :
        document.body.classList.add('overlay-active');
}