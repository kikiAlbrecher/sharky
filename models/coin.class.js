/**
 * Represents a coin in the game that can be collected by the player.
 * The coin has an image and random coordinates for its initial position.
 * 
 * @extends MovableObject
 */
class Coin extends MovableObject {
    width = 40;
    height = 40;

    offset = {
        top: 3,
        right: 4,
        bottom: 3,
        left: 3
    };

    IMAGES_COIN = [
        'img/4.Marcadores/1. Coins/4.png'
    ];

    /**
     * Creates an instance of the Coin class.
     * The coin is placed at a random position within the game world.
     */
    constructor() {
        super().loadImg(this.IMAGES_COIN);
        this.x = 280 + Math.random() * 440 * 4;
        this.y = 400 - Math.random() * 360;
    }
}