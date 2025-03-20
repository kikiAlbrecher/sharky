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

function toggleVolumeStart() {
    const loudspeakerOffRef = document.getElementById('volumeOff');
    const loudspeakerOnRef = document.getElementById('volumeOn');
    const startScreenRef = document.getElementById('startScreen');

    loudspeakerOffRef.classList.toggle('d-none');
    loudspeakerOnRef.classList.toggle('d-none');
    storeSoundStatus();
    startScreenRef.classList.contains('d-none') ? toggleSound() : toggleSoundStart();
}

function storeSoundStatus() {
    const loudspeakerOffRef = document.getElementById('volumeOff');

    if (loudspeakerOffRef.classList.contains('d-none')) {
        sessionStorage.setItem('soundStatus', 'on');
    } else {
        sessionStorage.setItem('soundStatus', 'off');
    }
}

function toggleSoundStart() {
    const loudspeakerOffRef = document.getElementById('volumeOff');

    loudspeakerOffRef.classList.contains('d-none') ? backgroundHappy.play() : backgroundHappy.pause();
}

function toggleSound() {
    const loudspeakerOffRef = document.getElementById('volumeOff');

    if (loudspeakerOffRef.classList.contains('d-none')) {
        allAudios.forEach(audio => {
            audio.muted = false;
        });
    } else {
        allAudios.forEach(audio => {
            audio.muted = true;
        });
    }
}

function toggleFullscreenImg() {
    const fullscreenImgRef = document.getElementById('fullscreenOn');
    const exitFullscreenImgRef = document.getElementById('fullscreenOff');

    if (fullscreenImgRef.classList.contains('d-none')) {
        exitFullscreenImgRef.classList.add('d-none');
        fullscreenImgRef.classList.remove('d-none');
    } else {
        fullscreenImgRef.classList.add('d-none');
        exitFullscreenImgRef.classList.remove('d-none');
    }
    toggleFullscreen();
}

function toggleFullscreen() {
    if (document.fullscreenElement || document.mozFullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        exitFullscreen();
    } else {
        enterFullscreen();
    }
}

function enterFullscreen() {
    let elem = document.documentElement;

    if (elem.requestFullscreen) elem.requestFullscreen();
    else if (elem.mozRequestFullscreen) elem.mozRequestFullscreen();
    else if (elem.webkitRequestFullscreen) elem.webkitRequestFullscreen();
    else if (elem.msRequestFullscreen) elem.msRequestFullscreen();
    else console.error('Fullscreen is not available.');
}

function exitFullscreen() {
    if (document.exitFullscreen) document.exitFullscreen();
    else if (document.mozCancelFullscreen) document.mozCancelFullscreen();
    else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    else if (document.msExitFullscreen) document.msExitFullscreen();
    else console.error('Fullscreen could not be exited.');
}

window.addEventListener('keydown', (event) => {
    if (event.defaultPrevented) return;
    event.preventDefault();
    event.stopPropagation();
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
    if (event.defaultPrevented) return;
    event.preventDefault();
    event.stopPropagation();
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
    if (event.defaultPrevented) return;

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
});

window.addEventListener('touchend', (event) => {
    if (event.defaultPrevented) return;

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
    backgroundHappy.volume = 1;
    restoreSoundStatus();
}

function backHome(screenPrefix) {
    const screen = document.getElementById(screenPrefix);
    const startScreen = document.getElementById('startScreen');

    gameEnd.pause();
    screen.classList.add('d-none');
    startScreen.style.display = 'flex';
    hadFirstContact = false;
    endbossIsIntroduced = false;
    backgroundHappy.volume = 1;
    restoreSoundStatus();
}

function restoreSoundStatus() {
    const loudspeakerOffRef = document.getElementById('volumeOff');
    const loudspeakerOnRef = document.getElementById('volumeOn');
    const soundStatus = sessionStorage.getItem('soundStatus');

    if (soundStatus === 'on') {
        loudspeakerOffRef.classList.add('d-none');
        loudspeakerOnRef.classList.remove('d-none');
        backgroundHappy.play();
    } else {
        loudspeakerOffRef.classList.remove('d-none');
        loudspeakerOnRef.classList.add('d-none');
        backgroundHappy.pause();
    }
}