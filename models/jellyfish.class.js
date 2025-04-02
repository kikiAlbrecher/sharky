/**
 * Class representing a jellyfish.
 * Inherits from the MovableObject class and handles the jellyfish's swimming and death animations.
 * 
 * @extends MovableObject
 */
class Jellyfish extends MovableObject {
    width = 80;
    height = 80;
    energy = 10;

    offset = {
        top: 9,
        right: 5,
        bottom: 12,
        left: 3
    };

    IMAGES_SWIMMING = [
        'img/2.Enemy/2 Jellyfish/Regular damage/Yellow 1.png',
        'img/2.Enemy/2 Jellyfish/Regular damage/Yellow 2.png',
        'img/2.Enemy/2 Jellyfish/Regular damage/Yellow 3.png',
        'img/2.Enemy/2 Jellyfish/Regular damage/Yellow 4.png',
        'img/2.Enemy/2 Jellyfish/Regular damage/Yellow 4.png',
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/2 Jellyfish/Dead/Yellow/y1.png',
        'img/2.Enemy/2 Jellyfish/Dead/Yellow/y2.png',
        'img/2.Enemy/2 Jellyfish/Dead/Yellow/y3.png',
        'img/2.Enemy/2 Jellyfish/Dead/Yellow/y4.png'
    ];

    /**
     * Creates an instance of the Jellyfish class.
     * Initializes the jellyfish's position, speed, and animations.
     */
    constructor() {
        super().loadImg(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = 600 + Math.random() * 1840;
        this.y = 384 - Math.random() * 280;
        this.angleX = Math.random() > Math.random() ? 1 : -1;
        this.angleY = Math.random() > Math.random() ? 1 : -1;
        this.speed = 1 + Math.random() * 6;
        this.loadImages(this.IMAGES_DEAD);
        this.animateJelly();
    }

    /**
     * Starts the jellyfish animation, toggling between swimming and dead states based on energy.
     */
    animateJelly() {
        setStoppableInterval(() => this.energy > 0 ? this.jellySwims() : this.jellyDead(), 1000 / 12);
    }

    /**
     * Animates the jellyfish swimming behavior.
     * Moves the jellyfish around the screen, bouncing off the edges.
     */
    jellySwims() {
        this.playAnimation(this.IMAGES_SWIMMING);
        this.x += this.angleX * this.speed;
        this.y += this.angleY * this.speed;

        if (this.x < 0 || this.x > 640) this.angleX = -this.angleX;
        if (this.y < 20 || this.y > 390) this.angleY = -this.angleY;
    }

    /**
     * Animates the jellyfish when it is dead.
     * The jellyfish moves slowly off the screen and disappears.
     */
    jellyDead() {
        this.playAnimation(this.IMAGES_DEAD);
        this.x += 3 - this.acceleration;
        this.y -= 8;

        if (this.x < -this.width || this.y < -this.height) {
            this.x = -this.width;
            this.y = -this.height;
        }
    }
}