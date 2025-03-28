/**
 * Represents a status bar specifically for displaying the life status in percentage of the protagonist Sharky.
 * It extends from the `StatusBar` class and displays different images based on the current life percentage.
 * 
 * @extends StatusBar
 */
class StatusBarLife extends StatusBar {

    IMAGES_STATUS = [
        'img/4.Marcadores/green/Life/0_copia 3.png',
        'img/4.Marcadores/green/Life/20_copia 4.png',
        'img/4.Marcadores/green/Life/40_copia 3.png',
        'img/4.Marcadores/green/Life/60_copia 3.png',
        'img/4.Marcadores/green/Life/80_copia 3.png',
        'img/4.Marcadores/green/Life/100_copia 2.png'
    ];

    /**
     * Creates an instance of the StatusBarLife class and initializes the status bar with the appropriate image.
     * Loads the life images and sets the percentage to the initial value.
     */
    constructor() {
        super().loadImg(this.IMAGES_STATUS[5]);
        this.loadImages(this.IMAGES_STATUS);
        this.setPercentage(this.percentage);
    }

    /**
     * Sets the percentage value of the life status and updates the displayed image accordingly.
     * 
     * @param {number} percentage - The new percentage value representing the current life status (0-100).
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_STATUS[this.resolveImageIndex()];
        this.img = this.imgCache[path];
    }
}