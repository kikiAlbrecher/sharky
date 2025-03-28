/**
 * Represents a Pufferfish variant (PufferfishRose) that swims and can die when its energy reaches 0.
 * This class extends the base Pufferfish class and uses different swimming and death images.
 * 
 * @extends Pufferfish
 */
class PufferfishRose extends Pufferfish {
    IMAGES_SWIMMING = [
        'img/2.Enemy/1.Pufferfish/1.Swim/2.swim1.png',
        'img/2.Enemy/1.Pufferfish/1.Swim/2.swim2.png',
        'img/2.Enemy/1.Pufferfish/1.Swim/2.swim3.png',
        'img/2.Enemy/1.Pufferfish/1.Swim/2.swim4.png',
        'img/2.Enemy/1.Pufferfish/1.Swim/2.swim5.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/1.Pufferfish/4.DIE/2.png'
    ];

    /**
     * Creates an instance of the PufferfishRose, initializing the position, animations, and behaviors.
     * 
     * @param {number} x - The initial x-coordinate of the PufferfishRose
     * @param {number} y - The initial y-coordinate of the PufferfishRose
     */
    constructor(x, y) {
        super().loadImg(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.checkSwimDirectionPuffer(x);
    }
}