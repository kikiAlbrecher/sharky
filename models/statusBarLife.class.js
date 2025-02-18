class StatusBarLife extends DrawableObject {
    x = 24;
    y = 0;
    width = 200;
    height = 50;
    percentage = 100;
    IMAGES_LIFE = [
        '../img/4.Marcadores/green/Life/0_copia 3.png',
        '../img/4.Marcadores/green/Life/20_copia 4.png',
        '../img/4.Marcadores/green/Life/40_copia 3.png',
        '../img/4.Marcadores/green/Life/60_copia 3.png',
        '../img/4.Marcadores/green/Life/80_copia 3.png',
        '../img/4.Marcadores/green/Life/100_copia 2.png'
    ];

    constructor() {
        super().loadImg(this.IMAGES_LIFE[5]);
        this.loadImages(this.IMAGES_LIFE);
        this.setPercentage(this.percentage);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_LIFE[this.resolveImageIndex()];
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