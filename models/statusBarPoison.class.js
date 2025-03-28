/**
 * Represents a status bar specifically for displaying the number of collected poison items.
 * It extends from the `StatusBarLife` class and displays different images based on the poison collection percentage.
 * 
 * @extends StatusBarLife
 */
class StatusBarPoison extends StatusBarLife {
    y = 80;
    percentage = 0;

    IMAGES_STATUS = [
        'img/4.Marcadores/green/poisoned bubbles/0_copia 2.png',
        'img/4.Marcadores/green/poisoned bubbles/20_copia 3.png',
        'img/4.Marcadores/green/poisoned bubbles/40_copia 2.png',
        'img/4.Marcadores/green/poisoned bubbles/60_copia 2.png',
        'img/4.Marcadores/green/poisoned bubbles/80_copia 2.png',
        'img/4.Marcadores/green/poisoned bubbles/100_copia 3.png',
    ];

    /**
     * Creates an instance of the StatusBarPoison class and initializes the status bar with the appropriate image.
     * Loads the poison images and sets the initial percentage to 0 (no poison items collected).
     */
    constructor() {
        super().loadImg(this.IMAGES_STATUS[0]);
        this.loadImages(this.IMAGES_STATUS);
    }
}