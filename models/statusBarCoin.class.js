/**
 * Represents a status bar specifically for displaying the number of collected coins.
 * It extends from the `StatusBarLife` class and displays different images based on the coin collection percentage.
 * 
 * @extends StatusBarLife
 */
class StatusBarCoin extends StatusBarLife {
    y = 40;
    percentage = 0;

    IMAGES_STATUS = [
        'img/4.Marcadores/green/Coin/0_copia 4.png',
        'img/4.Marcadores/green/Coin/20_copia 2.png',
        'img/4.Marcadores/green/Coin/40_copia 4.png',
        'img/4.Marcadores/green/Coin/60_copia 4.png',
        'img/4.Marcadores/green/Coin/80_copia 4.png',
        'img/4.Marcadores/green/Coin/100_copia 4.png'
    ];

    /**
     * Creates an instance of the StatusBarCoin class and initializes the status bar with the appropriate image.
     * Loads the coin images and sets the initial percentage to 0 (no coins collected).
     */
    constructor() {
        super().loadImg(this.IMAGES_STATUS[0]);
        this.loadImages(this.IMAGES_STATUS);
    }
}
