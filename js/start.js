let world;
let canvas;
let keyboard = new Keyboard();

/**
 * Starts the game and sets the sound settings.
 * 
 * This function updates the sessionStorage to indicate that the sound is turned on,
 * then calls the `startGame` function to begin the game with the specified screen ID.
 * It also adjusts the volume settings by calling the `volumeSettings` function.
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
 * The loading spinner is hidden after a specified timespan.
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