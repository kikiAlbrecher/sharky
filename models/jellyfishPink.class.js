/**
 * Class representing a pink jellyfish, which is a more dangerous variant of the Jellyfish (quicker swimming).
 * Inherits from the Jellyfish class and overrides the swimming and dead images.
 * 
 * @extends Jellyfish
 */
class JellyfishPink extends Jellyfish {
    energy = 15;
    energyReduction = 15;

    IMAGES_SWIMMING = [
        'img/2.Enemy/2 Jellyfish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jellyfish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jellyfish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jellyfish/Súper dangerous/Pink 4.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/2 Jellyfish/Dead/Pink/P1.png',
        'img/2.Enemy/2 Jellyfish/Dead/Pink/P2.png',
        'img/2.Enemy/2 Jellyfish/Dead/Pink/P3.png',
        'img/2.Enemy/2 Jellyfish/Dead/Pink/P4.png'
    ];

    /**
     * Creates an instance of the JellyfishPink class.
     * Initializes the jellyfish's position, speed, and animations based on the given x-coordinate.
     * 
     * @param {number} x - The starting x-coordinate of the jellyfish.
     */
    constructor(x) {
        super().loadImg(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = x - Math.random() * 340;
        this.y = 384 - Math.random() * 160;
        this.angleX = Math.random() > Math.random() ? 1 : -1;
        this.angleY = Math.random() > Math.random() ? 1 : -1;
        this.speed = 3 + Math.random() * 3;
        this.loadImages(this.IMAGES_DEAD);
        this.animateJelly();
    }
}