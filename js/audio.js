backgroundHappy = new Audio('./audio/happy-background-music.wav');
backgroundHappy.loop = 'true';

slap = new Audio('./audio/slap.mp3');
slap.volume = 0.5;

snore = new Audio('./audio/snore.mp3');
snore.loop = 'true';

collectedCoin = new Audio ('./audio/coin.mp3');
collectedCoin.volume = 0.5;

collectedPoison = new Audio ('./audio/poison.mp3');
collectedPoison.volume = 0.5;

pain = new Audio('./audio/ouch.mp3');

win = new Audio('./audio/win.mp3');
win.playbackRate = 1.4;

lost = new Audio('audio/lost.mp3');
lost.playbackRate = 1.4;

gameOver = new Audio('audio/sad-hopeful.mp3');
gameOver.loop = 'true';
gameOver.volume = 1;

endboss = new Audio ('audio/endboss.wav');
endboss.loop = 'true';

let allAudios = [
    backgroundHappy,
    slap,
    snore,
    collectedCoin,
    collectedPoison,
    pain,
    win,
    lost,
    gameOver,
    endboss
];

function stopAllAudiosExcept(exceptArray) {
    allAudios.forEach(audio => {
        if (!exceptArray.includes(audio)) {
            audio.pause();
        }
    });
}
