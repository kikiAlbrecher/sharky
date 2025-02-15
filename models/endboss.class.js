class Endboss extends MovableObject {
    x = 2140 + 200;
    y = 40;
    width = 400;
    height = 400;
    speed = 16;
    offset = {
        top: 136,
        right: 30,
        bottom: 74,
        left: 26
    };

    IMAGES_INTRODUCING = [
        '../img/2.Enemy/3 Final-enemy/1.Introduce/1.png',
        '../img/2.Enemy/3 Final-enemy/1.Introduce/2.png',
        '../img/2.Enemy/3 Final-enemy/1.Introduce/3.png',
        '../img/2.Enemy/3 Final-enemy/1.Introduce/4.png',
        '../img/2.Enemy/3 Final-enemy/1.Introduce/5.png',
        '../img/2.Enemy/3 Final-enemy/1.Introduce/6.png',
        '../img/2.Enemy/3 Final-enemy/1.Introduce/7.png',
        '../img/2.Enemy/3 Final-enemy/1.Introduce/8.png',
        '../img/2.Enemy/3 Final-enemy/1.Introduce/9.png',
        '../img/2.Enemy/3 Final-enemy/1.Introduce/10.png'
    ];

    IMAGES_SWIMMING = [
        '../img/2.Enemy/3 Final-enemy/2.floating/1.png',
        '../img/2.Enemy/3 Final-enemy/2.floating/2.png',
        '../img/2.Enemy/3 Final-enemy/2.floating/3.png',
        '../img/2.Enemy/3 Final-enemy/2.floating/4.png',
        '../img/2.Enemy/3 Final-enemy/2.floating/5.png',
        '../img/2.Enemy/3 Final-enemy/2.floating/6.png',
        '../img/2.Enemy/3 Final-enemy/2.floating/7.png',
        '../img/2.Enemy/3 Final-enemy/2.floating/8.png',
        '../img/2.Enemy/3 Final-enemy/2.floating/9.png',
        '../img/2.Enemy/3 Final-enemy/2.floating/10.png',
        '../img/2.Enemy/3 Final-enemy/2.floating/11.png',
        '../img/2.Enemy/3 Final-enemy/2.floating/12.png',
        '../img/2.Enemy/3 Final-enemy/2.floating/13.png'
    ];

    IMAGES_ATTACKING = [
        '../img/2.Enemy/3 Final-enemy/Attack/1.png',
        '../img/2.Enemy/3 Final-enemy/Attack/2.png',
        '../img/2.Enemy/3 Final-enemy/Attack/3.png',
        '../img/2.Enemy/3 Final-enemy/Attack/4.png',
        '../img/2.Enemy/3 Final-enemy/Attack/5.png',
        '../img/2.Enemy/3 Final-enemy/Attack/6.png'
    ];

    IMAGES_HURT = [
        '.../img/2.Enemy/3 Final-enemy/Hurt/1.png',
        '.../img/2.Enemy/3 Final-enemy/Hurt/2.png',
        '.../img/2.Enemy/3 Final-enemy/Hurt/3.png',
        '.../img/2.Enemy/3 Final-enemy/Hurt/4.png'
    ];

    IMAGES_DEAD = [
        '../img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 6.png',
        '../img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 7.png',
        '../img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 8.png',
        '../img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 9.png',
        '../img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    constructor() {
        super().loadImg(this.IMAGES_INTRODUCING[0]);
        this.loadImages(this.IMAGES_INTRODUCING);
        this.animateEndboss();
        this.loadImages(this.IMAGES_SWIMMING);
        this.animateSwimming();
    }

    animateEndboss() {
        this.playAnimation(this.IMAGES_INTRODUCING);
    }

    animateSwimming() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIMMING);
        }, 200);
    }
}