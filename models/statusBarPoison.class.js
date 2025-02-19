class StatusBarPoison extends DrawableObject {
    x = 24;
    y = 80;
    width = 200;
    height = 50;
    percentage = 0;

    IMAGES_POISON = [
        '../img/4.Marcadores/green/poisoned bubbles/0_copia 2.png',
        '../img/4.Marcadores/green/poisoned bubbles/20_copia 3.png',
        '../img/4.Marcadores/green/poisoned bubbles/40_copia 2.png',
        '../img/4.Marcadores/green/poisoned bubbles/60_copia 2.png',
        '../img/4.Marcadores/green/poisoned bubbles/80_copia 2.png',
        '../img/4.Marcadores/green/poisoned bubbles/100_copia 3.png',
    ];

    constructor() {
        super().loadImg(this.IMAGES_POISON[0]);
        this.loadImages(this.IMAGES_POISON);
        this.setPercentage(this.percentage);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_POISON[this.resolveImageIndex()];
        this.img = this.imgCache[path];
    }

    resolveImageIndex() {
        if (this.percentage >= 100) {
            this.percentage = 100;
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}