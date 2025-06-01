let intervalIds = [];

/**
 * Listens for keydown events and updates the `keyboard` object accordingly.
 * 
 * @param {KeyboardEvent} event - The event object representing the key press.
 */
window.addEventListener('keydown', (event) => {
    if (event.defaultPrevented) return;
    event.stopPropagation();
    switch (event.code) {
        case 'ArrowUp': keyboard.UP = true; break;
        case 'ArrowRight': keyboard.RIGHT = true; break;
        case 'ArrowDown': keyboard.DOWN = true; break;
        case 'ArrowLeft': keyboard.LEFT = true; break;
        case 'KeyD': keyboard.THROW = true; break;
        case 'KeyF': keyboard.THROW_POISON = true; break;
        case 'Space': keyboard.SPACE = true; event.preventDefault(); break;
        default: return;
    }
});

/**
 * Listens for keyup events and updates the `keyboard` object accordingly.
 * 
 * @param {KeyboardEvent} event - The event object representing the key release.
 */
window.addEventListener('keyup', (event) => {
    if (event.defaultPrevented) return;
    event.stopPropagation();
    switch (event.code) {
        case 'ArrowUp': keyboard.UP = false; break;
        case 'ArrowRight': keyboard.RIGHT = false; break;
        case 'ArrowDown': keyboard.DOWN = false; break;
        case 'ArrowLeft': keyboard.LEFT = false; break;
        case 'KeyD': keyboard.THROW = false; break;
        case 'KeyF': keyboard.THROW_POISON = false; break;
        case 'Space': keyboard.SPACE = false; event.preventDefault(); break;
        default: return;
    }
});

/**
 * Listens for touchstart events on touchscreen buttons and updates the `keyboard` object.
 * 
 * @param {TouchEvent} event - The touchstart event triggered by the user.
 */
window.addEventListener('touchstart', (event) => {
    const button = event.target.closest('.touchscreen-btn');

    if (!button) return;
    if (event.defaultPrevented) return;
    event.preventDefault();
    event.stopPropagation();
    if (button.id === 'btnUp') keyboard.UP = true;
    if (button.id === 'btnRight') keyboard.RIGHT = true;
    if (button.id === 'btnDown') keyboard.DOWN = true;
    if (button.id === 'btnLeft') keyboard.LEFT = true;
    if (button.id === 'btnAttackBubble') keyboard.THROW = true;
    if (button.id === 'btnAttackPoison') keyboard.THROW_POISON = true;
    if (button.id === 'btnAttackFin') keyboard.SPACE = true;
}, { passive: false });

/**
 * Listens for touchend events on touchscreen buttons and updates the `keyboard` object.
 * 
 * @param {TouchEvent} event - The touchend event triggered by the user.
 */
window.addEventListener('touchend', (event) => {
    const button = event.target.closest('.touchscreen-btn');

    if (!button) return;
    if (event.defaultPrevented) return;
    event.preventDefault();
    event.stopPropagation();
    if (button.id === 'btnUp') keyboard.UP = false;
    if (button.id === 'btnRight') keyboard.RIGHT = false;
    if (button.id === 'btnDown') keyboard.DOWN = false;
    if (button.id === 'btnLeft') keyboard.LEFT = false;
    if (button.id === 'btnAttackBubble') keyboard.THROW = false;
    if (button.id === 'btnAttackPoison') keyboard.THROW_POISON = false;
    if (button.id === 'btnAttackFin') keyboard.SPACE = false;
}, { passive: false });

/**
 * Toggles the fullscreen mode and updates the fullscreen button images.
 * Displays the appropriate image for entering or exiting fullscreen.
 */
function toggleFullscreenImg(event) {
    const fullscreenImgRef = document.getElementById('fullscreenOn');
    const exitFullscreenImgRef = document.getElementById('fullscreenOff');

    event.preventDefault();
    if (fullscreenImgRef.classList.contains('d-none')) {
        exitFullscreenImgRef.classList.add('d-none');
        fullscreenImgRef.classList.remove('d-none');
    } else {
        fullscreenImgRef.classList.add('d-none');
        exitFullscreenImgRef.classList.remove('d-none');
    }
    toggleFullscreen();
}

/**
 * Toggles the fullscreen state of the browser window.
 */
function toggleFullscreen() {
    if (document.fullscreenElement || document.mozFullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        exitFullscreen();
    } else {
        enterFullscreen();
    }
}

/**
 * Enters fullscreen mode for the document.
 */
function enterFullscreen() {
    let elem = document.documentElement;

    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.mozRequestFullscreen) elem.mozRequestFullscreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
    else console.error('Fullscreen is not available.');
}

/**
 * Exits fullscreen mode if the document is in fullscreen.
 */
function exitFullscreen() {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullscreen) document.mozCancelFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
    else console.error('Fullscreen could not be exited.');
}

/**
 * Sets an interval that can be stopped later.
 * 
 * @param {Function} fn - The function to execute repeatedly.
 * @param {number} time - The time interval in milliseconds between each execution.
 * @returns {number} - The interval ID for clearing the interval later.
 */
function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);

    intervalIds.push(id);
    return id;
}

/**
 * Clears all active intervals stored in the `intervalIds` array.
 */
function clearAllIntervals() {
    intervalIds.forEach(id => {
        clearInterval(id);
    });
    intervalIds = [];
}

/**
 * Starts the 'game over' sound after stopping all other sounds.
 * Waits for 300ms before playing the 'gameOver' sound.
 */
function startGameOverSound() {
    stopAllAudios([1])
        .then(() => {
            setTimeout(() => gameOver.play(), 300);
        })
        .catch(() => {
        });
}

/**
 * Displays the game over screen and plays the 'gameEnd' sound.
 */
function showGameOver() {
    displayGameOver();
    gameEnd.play();
}

/**
 * Displays the 'game over' screen by removing the 'noGameScreen' and showing the 'gameOverScreen' element.
 */
function displayGameOver() {
    const gameOver = document.getElementById('gameOverScreen');

    noGameScreen();
    gameOver.classList.remove('d-none');
}

/**
 * Hides the game screen and displays the "no game" screen.
 */
function noGameScreen() {
    const gameScreenRef = document.getElementById('gameScreen');

    gameScreenRef.classList.add('d-none');
}

/**
 * Restarts the game with the specified screen ID.
 * 
 * @param {string} screenId - The ID of the screen to load when restarting the game.
 */
function restartGame(screenId) {
    restartHomeSettings();
    startGame(screenId);
}

/**
 * Navigates back to the home screen and resets relevant game states.
 * 
 * @param {string} screenPrefix - The prefix for the screen to navigate to.
 */
function backHome(screenPrefix) {
    const screen = document.getElementById(screenPrefix);
    const gameNameRef = document.getElementById('gameName');

    restartHomeSettings();
    screen.classList.add('d-none');
    startScreenSettings();
    gameNameRef.classList.remove('d-none');
}

/**
 * Resets the restart and home screen settings to their initial values.
 * This function is called when restarting the game after a game over or when returning to the home screen.
 * It pauses the game, resets game-related flags, restores the background sound, 
 * and ensures the correct sound settings are applied.
 */
function restartHomeSettings() {
    gameEnd.pause();
    hadFirstContact = false;
    isDeadAnimationPlayed = false;
    playDead = false;
    backgroundHappy.volume = 1;
    restoreSoundStatus();
}

/**
 * Sets up the start screen with initial settings.
 */
function startScreenSettings() {
    const startScreen = document.getElementById('startScreen');
    const playBtnRef = document.getElementById('playBtn');
    const replayBtnRef = document.getElementById('replayBtn');

    startScreen.style.display = 'flex';
    playBtnRef.classList.add('d-none');
    replayBtnRef.classList.remove('d-none');
}

/**
 * Prevents the default behavior (e. g., context menu) when the user finishes touching a screen button.
 * This function listens for the `touchend` event on all elements with the class `.screen-btn`,
 * and calls `event.preventDefault()` to prevent the default action, such as triggering unwanted touch actions after the touch ends.
 * 
 */
document.querySelectorAll('.screen-btn').forEach(button => {
    button.addEventListener('touchend', function (event) {
        event.preventDefault();
    });
});

/**
 * Displays the instructions overlay by removing the 'd-none' class and adding the 'black-overlay' class.
 * Also handles the scrollbar visibility.
 */
function showInstructions(event) {
    const blackOverlayRef = document.getElementById('blackOverlay');

    event.preventDefault();
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