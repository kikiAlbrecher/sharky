class StatusBarLife extends StatusBar {

    IMAGES_STATUS = [
        'img/4.Marcadores/green/Life/0_copia 3.png',
        'img/4.Marcadores/green/Life/20_copia 4.png',
        'img/4.Marcadores/green/Life/40_copia 3.png',
        'img/4.Marcadores/green/Life/60_copia 3.png',
        'img/4.Marcadores/green/Life/80_copia 3.png',
        'img/4.Marcadores/green/Life/100_copia 2.png'
    ];

    constructor() {
        super().loadImg(this.IMAGES_STATUS[5]);
        this.loadImages(this.IMAGES_STATUS);
        this.setPercentage(this.percentage);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_STATUS[this.resolveImageIndex()];
        this.img = this.imgCache[path];
    }
}