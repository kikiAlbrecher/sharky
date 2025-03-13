class Coin extends MovableObject {
    width = 40;
    height = 40;

    IMAGES_COIN = [
        'img/4.Marcadores/1. Coins/4.png'
    ];

    constructor() {
        super().loadImg(this.IMAGES_COIN);
        this.x = 280 + Math.random() * 440 * 4;
        this.y = 400 - Math.random() * 360;
    }
}