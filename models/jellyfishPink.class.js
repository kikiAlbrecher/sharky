class JellyfishPink extends Jellyfish {
    IMAGES_SWIMMING = [
        'img/2.Enemy/2 Jellyfish/Súper dangerous/Pink 1.png',
        'img/2.Enemy/2 Jellyfish/Súper dangerous/Pink 2.png',
        'img/2.Enemy/2 Jellyfish/Súper dangerous/Pink 3.png',
        'img/2.Enemy/2 Jellyfish/Súper dangerous/Pink 4.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/2 Jellyfish/Dead/Pink/P1.png',
        'img/2.Enemy/2 Jellyfish/Dead/Pink/P2.png',
        'img/2.Enemy/2 Jellyfish/Dead/Pink/P3.png',
        'img/2.Enemy/2 Jellyfish/Dead/Pink/P4.png'
    ];

    constructor(x) {
        super().loadImg(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = x;
        this.y = 384 - Math.random() * 160;
        this.angleX = Math.random() > Math.random() ? 1 : -1;
        this.angleY = Math.random() > Math.random() ? 1 : -1;
        this.speed = 3 + Math.random() * 3;
        this.loadImages(this.IMAGES_DEAD);
        this.animateJelly();
    }



}