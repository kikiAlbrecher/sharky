class StatusBarCoin extends DrawableObject {
    x = 24;
    y = 35;
    width = 200;
    height = 50;
    percentage = 0;
    IMAGES_COIN = [
        '../img/4.Marcadores/green/Coin/0_copia 4.png',
        '../img/4.Marcadores/green/Coin/20_copia 2.png',
        '../img/4.Marcadores/green/Coin/40_copia 4.png',
        '../img/4.Marcadores/green/Coin/60_copia 4.png',
        '../img/4.Marcadores/green/Coin/80_copia 4.png',
        '../img/4.Marcadores/green/Coin/100_copia 4.png'
    ];

    constructor() {
        super().loadImg(this.IMAGES_COIN[0]);
        this.loadImages(this.IMAGES_COIN);
        this.setPercentage(this.percentage);
    }
    
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_COIN[this.resolveImageIndex()];
        this.img = this.imgCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1
        } else {
            return 0;
        }
    }
}
