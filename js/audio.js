backgroundHappy = new Audio('audio/happy-background-music.wav');
backgroundHappy.loop = 'true';

slap = new Audio('audio/slap.mp3');
slap.volume = 0.5;

snore = new Audio('audio/snore.mp3');
snore.loop = 'true';

collectedCoin = new Audio('audio/coin.mp3');
collectedCoin.volume = 0.5;

collectedPoison = new Audio('audio/poison.mp3');
collectedPoison.volume = 0.5;

throwingBubbles = new Audio('audio/throw.mp3');

pain = new Audio('audio/ouch.mp3');

endbossFight = new Audio('audio/endboss-shortened.mp3');
endbossFight.loop = 'true';

endbossPain = new Audio('audio/endboss-pain.mp3');

win = new Audio('audio/win.mp3');
win.playbackRate = 1.4;
win.loop = 'false';

gameOver = new Audio('audio/lost.mp3');
gameOver.playbackRate = 1.6;

gameEnd = new Audio('audio/hopeful.mp3');
gameEnd.loop = 'true';

let allAudios = [
    win,
    gameOver,
    backgroundHappy,
    slap,
    snore,
    collectedCoin,
    collectedPoison,
    throwingBubbles,
    pain,
    endbossFight,
    endbossPain,
    gameEnd
];

/**
 * Manages the volume settings based on the stored sound status in sessionStorage.
 * If the sound status is 'on', loudspeakers are turned on. If 'off', audio is stopped and loudspeakers are turned off.
 */
function volumeSettings() {
    const soundStatusRef = sessionStorage.getItem('soundStatus');

    if (soundStatusRef === 'off') {
        putLoudspeakersOff();
        stopAllAudios();
    } else if (soundStatusRef === 'on') {
        putLoudspeakersOn();
    }
}

/**
 * Shows the 'volumeOff' icon and hides the 'volumeOn' icon.
 */
function putLoudspeakersOff() {
    const loudspeakerOffRef = document.getElementById('volumeOff');
    const loudspeakerOnRef = document.getElementById('volumeOn');

    loudspeakerOffRef.classList.remove('d-none');
    loudspeakerOnRef.classList.add('d-none');
}

/**
 * Shows the 'volumeOn' icon and hides the 'volumeOff' icon.
 */
function putLoudspeakersOn() {
    const loudspeakerOffRef = document.getElementById('volumeOff');
    const loudspeakerOnRef = document.getElementById('volumeOn');

    loudspeakerOffRef.classList.add('d-none');
    loudspeakerOnRef.classList.remove('d-none');
}

/**
 * Stops all audio elements in the `allAudios` array by pausing them and resetting their current time to 0.
 * This function returns a Promise that resolves when all audios have been paused, or rejects if an error occurs during the process.
 * 
 * @returns {Promise<void>} A promise that resolves when all audios are successfully stopped, or rejects if an error occurs.
 * 
 * @throws {Error} If there is an issue pausing or resetting the audio elements, the promise will be rejected with an error.
 */
function stopAllAudios() {
    return new Promise((resolve, reject) => {
        try {
            allAudios.forEach(audio => {
                audio.pause();
                audio.currentTime = 0;
            });
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

function toggleVolumeStart() {
    const loudspeakerOffRef = document.getElementById('volumeOff');
    const loudspeakerOnRef = document.getElementById('volumeOn');
    const startScreenRef = document.getElementById('startScreen');

    loudspeakerOffRef.classList.toggle('d-none');
    loudspeakerOnRef.classList.toggle('d-none');

    startScreenRef && !startScreenRef.classList.contains('d-none') ? toggleSoundStart() : toggleSound();

    if (startScreenRef) {
        const displayStyle = window.getComputedStyle(startScreenRef).display;

        displayStyle === 'flex' ? toggleSoundStart() : toggleSound();
    }
    storeSoundStatus();
}

function storeSoundStatus() {
    const loudspeakerOffRef = document.getElementById('volumeOff');

    loudspeakerOffRef.classList.contains('d-none') ? sessionStorage.setItem('soundStatus', 'on') : sessionStorage.setItem('soundStatus', 'off');
}

function restoreSoundStatus() {
    const soundStatus = sessionStorage.getItem('soundStatus');

    if (soundStatus === 'on') {
        putLoudspeakersOn();
        backgroundHappy.play();
    } else {
        putLoudspeakersOff();
        backgroundHappy.pause();
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

function playSoundByStatus() {
    const soundStatus = sessionStorage.getItem('soundStatus');

    if (soundStatus === 'off') {
        stopAllAudios();
    } else {
        backgroundHappy.play();
    }
}