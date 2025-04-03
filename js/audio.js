backgroundHappy = new Audio('audio/happy-background-music.wav');
backgroundHappy.loop = true;

slap = new Audio('audio/slap.mp3');
slap.volume = 0.5;

snore = new Audio('audio/snore.mp3');
snore.loop = true;

collectedCoin = new Audio('audio/coin.mp3');
collectedCoin.volume = 0.5;

collectedPoison = new Audio('audio/poison.mp3');
collectedPoison.volume = 0.5;

throwingBubbles = new Audio('audio/throw.mp3');

pain = new Audio('audio/ouch.mp3');

endbossFight = new Audio('audio/endboss-shortened.mp3');
endbossFight.loop = true;

endbossPain = new Audio('audio/endboss-pain.mp3');

win = new Audio('audio/win.mp3');
win.playbackRate = 1.4;
win.loop = false;

gameOver = new Audio('audio/lost.mp3');
gameOver.playbackRate = 1.6;

gameEnd = new Audio('audio/hopeful.mp3');
gameEnd.loop = true;

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
 * Manages the volume settings based on the stored sound status in `localStorage`.
 * If the sound status is 'off', the sound is turned off and audios are stopped.
 * If the sound status is 'on', the sound is enabled, when the start button is clicked, and volume is set accordingly.
 * If the sound status is undefined in `localStorage`, it will be set to 'off' and audios will be stopped.
 */
function volumeSettings() {
    const soundStatusRef = localStorage.getItem('soundStatus');

    if (soundStatusRef === 'off') {
        soundStatusOff();
    } else if (soundStatusRef === 'on') {
        soundStatusOn();
    } else if (soundStatusRef == null) {
        soundStatusUndefined();
    }
}

/**
 * Disables sound and stops all audios when the sound status is set to 'off'.
 * It also updates the volume button's background color to its default state.
 */
function soundStatusOff() {
    const volumeBtnOnRef = document.getElementById('volumeBtn');

    putLoudspeakersOff();
    stopAllAudios();
    volumeBtnOnRef.style.backgroundColor = '';
}

/**
 * If the sound status is 'on', the icon presented shows turned on loudspeakers. 
 * The button will be marked grey, because - without the player´s intervention - no sound can be played. 
 * The playing of sounds is prevented by the browser.
 * When the game starts (player´s intervention), the sounds will be played.
 */
function soundStatusOn() {
    const volumeBtnOnRef = document.getElementById('volumeBtn');

    putLoudspeakersOn();
    volumeBtnOnRef.style.backgroundColor = 'rgb(181, 180, 180)';
}

/**
 * Handles the case where the sound status is undefined in `localStorage`.
 * The sound is turned off, all audios are stopped, and the sound status is stored.
 */
function soundStatusUndefined() {
    putLoudspeakersOff();
    stopAllAudios();
    storeSoundStatus();
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
 * Audio elements listed in the `exceptArray` will be ignored and not stopped.
 * If an error occurs while pausing an audio, it will be ignored and not logged in the console.
 * 
 * @param {Audio[]} exceptArray - An array of audio elements that should not be stopped.
 * @returns {Promise<void>} A promise that resolves when all audios are successfully stopped.
 */
function stopAllAudios(exceptArray = []) {
    return new Promise((resolve) => {
        try {
            allAudios.forEach(audio => {
                if (!exceptArray.includes(audio)) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            });
        } catch (error) {
        } finally {
            resolve();
        }
    });
}

/**
 * Toggles the volume icon on the start screen and controls the sound based on the current status.
 * It checks if the start screen is visible, then either starts the background music or all sounds if play is active.
 */
function toggleVolumeStart(event) {
    const loudspeakerOffRef = document.getElementById('volumeOff');
    const loudspeakerOnRef = document.getElementById('volumeOn');
    const startScreenRef = document.getElementById('startScreen');
    const volumeBtnOnRef = document.getElementById('volumeBtn');

    event.preventDefault();
    loudspeakerOffRef.classList.toggle('d-none');
    loudspeakerOnRef.classList.toggle('d-none');
    volumeBtnOnRef.style.backgroundColor = '';

    startScreenRef && !startScreenRef.classList.contains('d-none') ? toggleSoundStart() : toggleSound();
    startScreenSound();
    storeSoundStatus();
}

/**
 * Handles the sound toggling when the start screen is displayed.
 * It checks if the start screen is visible and applies the appropriate sound settings.
 */
function startScreenSound() {
    const startScreenRef = document.getElementById('startScreen');

    if (startScreenRef) {
        const displayStyle = window.getComputedStyle(startScreenRef).display;

        if (displayStyle === 'flex') toggleSoundStart();
    }
}

/**
 * Starts or stops the background sound when the volume icon is toggled on the start screen.
 */
function toggleSoundStart() {
    const loudspeakerOffRef = document.getElementById('volumeOff');

    loudspeakerOffRef.classList.contains('d-none') ? backgroundHappy.play() : backgroundHappy.pause();
}

/**
 * Toggles the sound for all audio elements on the page.
 * If the volume icon is off, it mutes all audio; if it is on, it unmutes all audio.
 */
function toggleSound() {
    const loudspeakerOffRef = document.getElementById('volumeOff');
    const volumeBtnOnRef = document.getElementById('volumeBtn');

    volumeBtnOnRef.style.backgroundColor = '';
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

/**
 * Stores the current sound status (on or off) in the localStorage.
 * If the volume is off, it stores 'off'; if the volume is on, it stores 'on'.
 */
function storeSoundStatus() {
    const loudspeakerOffRef = document.getElementById('volumeOff');

    loudspeakerOffRef.classList.contains('d-none') ? localStorage.setItem('soundStatus', 'on') : localStorage.setItem('soundStatus', 'off');
}

/**
 * Restores the sound status based on the value stored in localStorage.
 * If the sound status is 'on', it enables the sound; otherwise, it disables the sound.
 */
function restoreSoundStatus() {
    const soundStatus = localStorage.getItem('soundStatus');

    if (soundStatus === 'on') {
        putLoudspeakersOn();
        backgroundHappy.play();
    } else {
        putLoudspeakersOff();
        backgroundHappy.pause();
    }
}