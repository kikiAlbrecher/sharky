/**
 * Represents a status bar that displays the current status, such as health or energy, in the game.
 * The status bar updates the visual representation based on the current percentage value.
 * 
 * @extends DrawableObject
 */
class StatusBar extends DrawableObject {
    x = 24;
    width = 200;
    height = 50;
    percentage = 100;

    /**
     * Creates an instance of the StatusBar class.
     */
    constructor() {
        super();
    }

    /**
     * Resolves the image index to be used based on the current percentage value.
     * The image corresponds to different levels of the status bar, representing various stages 
     * of health or energy.
     * 
     * @returns {number} The image index corresponding to the current percentage value.
     */
    resolveImageIndex() {
        if (this.percentage >= 100) {
            this.percentage = 100;
            return 5;
        } else if (this.percentage >= 80) return 4;
        else if (this.percentage >= 60) return 3;
        else if (this.percentage >= 40) return 2;
        else if (this.percentage >= 20) return 1;
        else return 0;
    }
}