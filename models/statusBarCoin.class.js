class StatusBarCoin extends StatusBarLife {
    y = 40;
    percentage = 0;

    IMAGES_STATUS = [
        '../img/4.Marcadores/green/Coin/0_copia 4.png',
        '../img/4.Marcadores/green/Coin/20_copia 2.png',
        '../img/4.Marcadores/green/Coin/40_copia 4.png',
        '../img/4.Marcadores/green/Coin/60_copia 4.png',
        '../img/4.Marcadores/green/Coin/80_copia 4.png',
        '../img/4.Marcadores/green/Coin/100_copia 4.png'
    ];

    constructor() {
        super().loadImg(this.IMAGES_STATUS[0]);
        this.loadImages(this.IMAGES_STATUS);
    }
}
