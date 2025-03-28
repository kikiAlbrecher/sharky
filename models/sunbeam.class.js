/**
 * Class represents a sunbeam object in the game.
 * The sunbeam has an image and an x-coordinate that determines its position.
 * 
 * @extends MovableObject
 */
class Sunbeam extends MovableObject {

    /**
     * Creates an instance of the Sunbeam class.
     * The sunbeam is assigned an image and an x-coordinate for its position.
     * 
     * @param {string} imgPath - The path to the image representing the sunbeam.
     * @param {number} x - The x-coordinate position of the sunbeam in the game world.
     */
    constructor(imgPath, x) {
        super().loadImg(imgPath);
        this.x = x;
    }
}