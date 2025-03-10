backgroundHappy = new Audio('./audio/happy-background-music.wav');
backgroundHappy.loop = 'true';

slap = new Audio('./audio/slap.mp3');
slap.volume = 0.5;

snore = new Audio('./audio/snore.mp3');
snore.loop = 'true';

collectedCoin = new Audio('./audio/coin.mp3');
collectedCoin.volume = 0.5;

collectedPoison = new Audio('./audio/poison.mp3');
collectedPoison.volume = 0.5;

pain = new Audio('./audio/ouch.mp3');

endbossFight = new Audio('audio/endboss.wav');
endbossFight.loop = 'true';

win = new Audio('./audio/win.mp3');
win.playbackRate = 1.4;
win.loop = 'false';

gameOver = new Audio('audio/lost.mp3');
gameOver.playbackRate = 1.6;

gameEnd = new Audio('audio/hopeful.mp3');
gameEnd.loop = 'true';

let allAudios = [
    backgroundHappy,
    slap,
    snore,
    collectedCoin,
    collectedPoison,
    pain,
    endbossFight,
    win,
    gameOver,
    gameEnd
];

function stopAllAudios() {
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}
