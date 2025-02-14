class Coin extends MovableObject {
    width = 40;
    height = 40;

    IMAGES_COIN = [
        '../img/4.Marcadores/1. Coins/1.png',
        '../img/4.Marcadores/1. Coins/2.png',
        '../img/4.Marcadores/1. Coins/3.png',
        '../img/4.Marcadores/1. Coins/4.png'
    ];

    constructor() {
        super().loadImg('../img/4.Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES_COIN);
        this.x = 280 + Math.random() * 440;
        this.y = 400 - Math.random() * 560;
        this.animateCoin();
    }

    animateCoin() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_COIN.length;
            let path = this.IMAGES_COIN[i];
            this.img = this.imgCache[path];
            this.currentImage++;
        }, 1000 / 6);
    }
}