/**
 * Represents a background object in the game, which is movable.
 * This class is used for objects in the background that can be moved horizontally.
 * 
 * @extends MovableObject
 */
class BackgroundObject extends MovableObject {

    /**
     * Creates an instance of the BackgroundObject class.
     * 
     * @param {string} imgPath - The path to the image that represents the background object.
     * @param {number} x - The initial x-coordinate of the background object.
     */
    constructor(imgPath, x) {
        super().loadImg(imgPath);
        this.x = x;
    }
}