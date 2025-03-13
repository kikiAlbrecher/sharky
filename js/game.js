let world;
let canvas;
let keyboard = new Keyboard();
let intervalIds = [];

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
    return id;
}

function toggleFullscreenImg(screenType) {
    const fullscreenImgRef = document.getElementById('fullscreenOn');
    const exitFullscreenImgRef = document.getElementById('fullscreenOff');

    if (document.fullscreenElement || document.mozFullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        fullscreenImgRef.classList.add('d-none');
        exitFullscreenImgRef.classList.remove('d-none');
    } else {
        fullscreenImgRef.classList.remove('d-none');
        exitFullscreenImgRef.classList.add('d-none');
    }
    toggleFullscreen(screenType);
}

function toggleFullscreen(screenType) {
    if (document.fullscreenElement || document.mozFullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        exitFullscreen();
    } else {
        enterFullscreen(screenType);
    }
}

function enterFullscreen(screenType) {
    const elem = document.getElementById(screenType);

    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.mozRequestFullscreen) elem.mozRequestFullscreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
}

function exitFullscreen() {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullscreen) document.mozCancelFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
}

function toggleVolumeStart() {
    const loudspeakerOffRef = document.getElementById('volumeOff');
    const loudspeakerOnRef = document.getElementById('volumeOn');

    loudspeakerOffRef.classList.toggle('d-none');
    loudspeakerOnRef.classList.toggle('d-none');
    toggleSoundStart();
}

function toggleSoundStart() {
    const loudspeakerOffRef = document.getElementById('volumeOff');

    loudspeakerOffRef.classList.contains('d-none') ? backgroundHappy.play() : backgroundHappy.pause();
}

function toggleLoudspeakers() {
    const loudspeakerOffRef = document.getElementById('mobileMute');
    const loudspeakerOnRef = document.getElementById('mobileSound');

    loudspeakerOffRef.classList.toggle('d-none');
    loudspeakerOnRef.classList.toggle('d-none');
    toggleSound();
}

function toggleSound() {
    const loudspeakerOffRef = document.getElementById('mobileMute');

    if (loudspeakerOffRef.classList.contains('d-none')) {
        allAudios.forEach(audio => {
            audio.muted = true;
        });
    } else {
        allAudios.forEach(audio => {
            audio.muted = false;
        });
    }
}

window.addEventListener('keydown', (event) => {
    if (event.defaultPrevented) {
        return;
    }
    switch (event.code) {
        case "ArrowUp":
            keyboard.UP = true;
            break;
        case "ArrowRight":
            keyboard.RIGHT = true;
            break;
        case "ArrowDown":
            keyboard.DOWN = true;
            break;
        case "ArrowLeft":
            keyboard.LEFT = true;
            break;
        case "KeyD":
            keyboard.THROW = true;
            break;
        case "KeyF":
            keyboard.THROW_POISON = true;
            break;
        case "Space":
            keyboard.SPACE = true;
            break;
        default:
            return;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.defaultPrevented) {
        return;
    }
    switch (event.code) {
        case "ArrowUp": keyboard.UP = false;
            break;
        case "ArrowRight":
            keyboard.RIGHT = false;
            break;
        case "ArrowDown":
            keyboard.DOWN = false;
            break;
        case "ArrowLeft":
            keyboard.LEFT = false;
            break;
        case "KeyD":
            keyboard.THROW = false;
            break;
        case "KeyF":
            keyboard.THROW_POISON = false;
            break;
        case "Space":
            keyboard.SPACE = false;
            break;
        default:
            return;
    }
});

window.addEventListener('touchstart', (event) => {
    if (event.defaultPrevented) {
        return;
    }

    const button = event.target.closest('.touchscreen-btn');
    if (!button) return;

    event.stopPropagation();

    if (button.id === 'btnUp') keyboard.UP = true;
    if (button.id === 'btnRight') keyboard.RIGHT = true;
    if (button.id === 'btnDown') keyboard.DOWN = true;
    if (button.id === 'btnLeft') keyboard.LEFT = true;
    if (button.id === 'btnAttackBubble') keyboard.THROW = true;
    if (button.id === 'btnAttackPoison') keyboard.THROW_POISON = true;
    if (button.id === 'btnAttackFin') keyboard.SPACE = true;
    if (button.id === 'mobileMute' || button.id === 'mobileSound') toggleLoudspeakers();
    if (button.id === 'mobileFullscreen') toggleFullscreenImg('gameScreen');
});

window.addEventListener('touchend', (event) => {
    if (event.defaultPrevented) {
        return;
    }

    const button = event.target.closest('.touchscreen-btn');
    if (!button) return;

    event.stopPropagation();

    if (button.id === 'btnUp') keyboard.UP = false;
    if (button.id === 'btnRight') keyboard.RIGHT = false;
    if (button.id === 'btnDown') keyboard.DOWN = false;
    if (button.id === 'btnLeft') keyboard.LEFT = false;
    if (button.id === 'btnAttackBubble') keyboard.THROW = false;
    if (button.id === 'btnAttackPoison') keyboard.THROW_POISON = false;
    if (button.id === 'btnAttackFin') keyboard.SPACE = false;

});

function clearAllIntervals() {
    intervalIds.forEach(id => {
        clearInterval(id);
    });
    intervalIds = [];
}

function noCanvas() {
    const canvas = document.getElementById('canvas');
    const headline = document.getElementById('gameName');

    canvas.classList.add('d-none');
    headline.classList.add('d-none');
}

function restartGame(screenId) {
    gameEnd.pause();
    startGame(screenId);
    hadFirstContact = false;
    endbossIsIntroduced = false;
}

function backHome(screenPrefix) {
    const screen = document.getElementById(screenPrefix);
    const startScreen = document.getElementById('startScreen');

    gameEnd.pause();
    screen.classList.add('d-none');
    startScreen.style.display = 'flex';
    hadFirstContact = false;
    endbossIsIntroduced = false;
}