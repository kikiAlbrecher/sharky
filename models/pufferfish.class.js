/**
 * Represents a Pufferfish enemy that swims and can die when its energy reaches 0.
 * The Pufferfish has swimming animations and a death animation, as well as basic movement capabilities.
 * 
 * @extends MovableObject
 */
class Pufferfish extends MovableObject {
    energy = 10;

    offset = {
        top: 8,
        right: 8,
        bottom: 20,
        left: 3
    };

    IMAGES_SWIMMING = [
        'img/2.Enemy/1.Pufferfish/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Pufferfish/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Pufferfish/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Pufferfish/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Pufferfish/1.Swim/1.swim5.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/1.Pufferfish/4.DIE/1.Dead 1 (can animate by going up).png'
    ]

    /**
     * Creates an instance of the Pufferfish enemy with initial position and energy.
     * The Pufferfish will start swimming. His swimming direction is checked every 100ms.
     * 
     * @param {number} x - The initial x-coordinate of the Pufferfish
     * @param {number} y - The initial y-coordinate of the Pufferfish
     */
    constructor(x, y) {
        super().loadImg(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.width = 48 + Math.random() * 24;
        this.height = this.width;
        this.speed = 3 + Math.random() * 4;
        this.animatePufferfish();
        this.checkSwimDirectionPuffer(x);
    }

    /**
     * Starts the swimming animation for the Pufferfish, switching between frames.
     * If the Pufferfish is hit by the tailfin slap of the protagonist, the death animation is triggered.
     */
    animatePufferfish() {
        setStoppableInterval(() => {
            if (this.energy > 0) {
                this.playAnimation(this.IMAGES_SWIMMING);
            } else {
                this.pufferDead();
            }
        }, 1000 / 15);
    }

    /**
     * Handles the behavior when the Pufferfish dies. The death animation is played.
     * The dead Pufferfish moves left and up.
     * The Pufferfish disappears once it moves past the screen boundaries above.
     */
    pufferDead() {
        this.x -= 16;
        this.y -= 24;

        this.playAnimation(this.IMAGES_DEAD);
        if (this.x < -this.width || this.y < -this.height) {
            this.x = -this.width;
            this.y = -this.height;
        }
    }
}