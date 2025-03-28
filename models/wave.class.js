/**
 * Represents a wave object in the game.
 * The wave has an image and an x-coordinate that determines its position.
 * 
 * @extends MovableObject
 */
class Wave extends MovableObject {

    /**
     * Creates an instance of the Wave class.
     * The wave is assigned an image and an x-coordinate for its position.
     * 
     * @param {string} imgPath - The path to the image representing the wave.
     * @param {number} x - The x-coordinate position of the wave in the game world.
     */
    constructor(imgPath, x) {
        super().loadImg(imgPath);
        this.x = x;
    }
}