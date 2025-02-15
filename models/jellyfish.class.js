class Jellyfish extends MovableObject {
    width = 80;
    height = 80;
    offset = {
        top: 5,
        right: 3,
        bottom: 10,
        left: 1
    };

    IMAGES_SWIMMING = [
        '../img/2.Enemy/2 Jellyfish/Regular damage/Yellow 1.png',
        '../img/2.Enemy/2 Jellyfish/Regular damage/Yellow 2.png',
        '../img/2.Enemy/2 Jellyfish/Regular damage/Yellow 3.png',
        '../img/2.Enemy/2 Jellyfish/Regular damage/Yellow 4.png',
        '../img/2.Enemy/2 Jellyfish/Regular damage/Yellow 4.png',
    ];

    constructor() {
        super().loadImg('../img/2.Enemy/2 Jellyfish/Regular damage/Yellow 1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = 280 + Math.random() * 1880;
        this.y = 400 - Math.random() * 560;
        this.angleX = Math.random() > Math.random() ? 1 : -1;
        this.angleY = Math.random() > Math.random() ? 1 : -1;
        this.speed = 1 + Math.random() * 6;
        this.animateJellySwimming();
    }

    animateJellySwimming() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);
            this.x += this.angleX * this.speed;
            this.y += this.angleY * this.speed;

            if (this.x < 0 || this.x > 640) {
                this.angleX = -this.angleX;
            }
            if (this.y < -180 || this.y > 390) {
                this.angleY = -this.angleY;
            }
        }, 1000 / 12);
    }
}