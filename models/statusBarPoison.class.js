class StatusBarPoison extends StatusBarLife {
    y = 70;
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
}