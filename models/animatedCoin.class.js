class AnimatedCoin extends MovableObject {
    width = 40;
    height = 40;

    IMAGES_COIN = [
        '../img/4.Marcadores/1. Coins/1.png',
        '../img/4.Marcadores/1. Coins/2.png',
        '../img/4.Marcadores/1. Coins/3.png',
        '../img/4.Marcadores/1. Coins/4.png'
    ];

    constructor() {
        super().loadImg(this.IMAGES_COIN[0]);
        this.loadImages(this.IMAGES_COIN);
        this.x = 280 + Math.random() * 440 * 4;
        this.y = 400 - Math.random() * 360;
        this.animateCoin();
    }

    animateCoin() {
        setStoppableInterval(() => {
            let i = this.currentImage % this.IMAGES_COIN.length;
            let path = this.IMAGES_COIN[i];
            this.img = this.imgCache[path];
            this.currentImage++;
        }, 1000 / 6);
    }
}