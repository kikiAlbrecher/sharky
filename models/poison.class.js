/**
 * Represents a poison object in the game that can be collected by the player.
 * The poison has an image and random coordinates for its initial position.
 * 
 * @extends MovableObject
 */
class Poison extends MovableObject {
    width = 50;
    height = 60;

    offset = {
        top: 27,
        right: 10,
        bottom: 3,
        left: 10
    };

    IMAGES_POISON = [
        'img/4.Marcadores/Posión/Dark - Left.png',
    ];

    /**
     * Creates an instance of the Poison class.
     * The poison is placed at a random position within the game world.
     */
    constructor() {
        super().loadImg(this.IMAGES_POISON);
        this.x = 380 + Math.random() * 440 * 4;
        this.y = 400 - Math.random() * 60;
    }
}