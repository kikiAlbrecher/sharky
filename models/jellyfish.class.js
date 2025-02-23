class Jellyfish extends MovableObject {
    width = 80;
    height = 80;
    energy = 10;
    energyReduction = 10;
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

    IMAGES_DEAD = [
        '../img/2.Enemy/2 Jellyfish/Dead/Yellow/y1.png',
        '../img/2.Enemy/2 Jellyfish/Dead/Yellow/y2.png',
        '../img/2.Enemy/2 Jellyfish/Dead/Yellow/y3.png',
        '../img/2.Enemy/2 Jellyfish/Dead/Yellow/y4.png'
    ];

    constructor() {
        super().loadImg(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = 280 + Math.random() * 1880;
        this.y = 400 - Math.random() * 560;
        this.angleX = Math.random() > Math.random() ? 1 : -1;
        this.angleY = Math.random() > Math.random() ? 1 : -1;
        this.speed = 1 + Math.random() * 6;
        this.loadImages(this.IMAGES_DEAD);
        this.animateJelly();
    }

    animateJelly() {
        setInterval(() => {
            if (this.energy > 0) {
                this.jellySwims();
            } else {
                this.jellyDead();
            }
        }, 1000 / 12);
    }

    jellySwims() {
        this.playAnimation(this.IMAGES_SWIMMING);
        this.x += this.angleX * this.speed;
        this.y += this.angleY * this.speed;

        if (this.x < 0 || this.x > 640) {
            this.angleX = -this.angleX;
        }
        if (this.y < -180 || this.y > 390) {
            this.angleY = -this.angleY;
        }
    }

    jellyDead() {
        this.playAnimation(this.IMAGES_DEAD);
        this.x += 3 - this.acceleration;
        this.y -= 8;
        // this.speed = Math.max(0.1, this.speed - 0.01);

        if (this.x < -this.width || this.y < -this.height) {
            this.x = -this.width;
            this.y = -this.height;
        }
    }
}