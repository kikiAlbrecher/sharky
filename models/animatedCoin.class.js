/**
 * Represents an animated coin object class in the game.
 * The coin will animate its appearance by cycling through a series of images.
 * It is randomly positioned on the screen when created.
 * 
 * @extends MovableObject
 */
class AnimatedCoin extends MovableObject {
    width = 40;
    height = 40;

    offset = {
        top: 4,
        right: 4,
        bottom: 4,
        left: 3
    };

    IMAGES_COIN = [
        'img/4.Marcadores/1. Coins/1.png',
        'img/4.Marcadores/1. Coins/2.png',
        'img/4.Marcadores/1. Coins/3.png',
        'img/4.Marcadores/1. Coins/4.png'
    ];

    /**
     * Creates an instance of AnimatedCoin, loading images and positioning it randomly.
     */
    constructor() {
        super().loadImg(this.IMAGES_COIN[0]);
        this.loadImages(this.IMAGES_COIN);
        this.x = 280 + Math.random() * 440 * 4;
        this.y = 400 - Math.random() * 360;
        this.animateCoin();
    }

    /**
     * Animates the coin by cycling through its images at a regular interval.
     * The animation is controlled by changing the `img` property to the next image in the sequence.
     */
    animateCoin() {
        setStoppableInterval(() => {
            let i = this.currentImage % this.IMAGES_COIN.length;
            let path = this.IMAGES_COIN[i];
            this.img = this.imgCache[path];
            this.currentImage++;
        }, 1000 / 6);
    }
}