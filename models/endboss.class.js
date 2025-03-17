class Endboss extends MovableObject {
    x = 2860 + 200;
    y = 40;
    width = 400;
    height = 400;
    speed = 16;
    energyReduction = 20;
    world;

    offset = {
        top: 192,
        right: 30,
        bottom: 74,
        left: 26
    };

    IMAGES_INTRODUCING = [
        'img/2.Enemy/3 Final-enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/10.png'
    ];

    IMAGES_SWIMMING = [
        'img/2.Enemy/3 Final-enemy/2.floating/1.png',
        'img/2.Enemy/3 Final-enemy/2.floating/2.png',
        'img/2.Enemy/3 Final-enemy/2.floating/3.png',
        'img/2.Enemy/3 Final-enemy/2.floating/4.png',
        'img/2.Enemy/3 Final-enemy/2.floating/5.png',
        'img/2.Enemy/3 Final-enemy/2.floating/6.png',
        'img/2.Enemy/3 Final-enemy/2.floating/7.png',
        'img/2.Enemy/3 Final-enemy/2.floating/8.png',
        'img/2.Enemy/3 Final-enemy/2.floating/9.png',
        'img/2.Enemy/3 Final-enemy/2.floating/10.png',
        'img/2.Enemy/3 Final-enemy/2.floating/11.png',
        'img/2.Enemy/3 Final-enemy/2.floating/12.png',
        'img/2.Enemy/3 Final-enemy/2.floating/13.png'
    ];

    IMAGES_ATTACKING = [
        'img/2.Enemy/3 Final-enemy/Attack/1.png',
        'img/2.Enemy/3 Final-enemy/Attack/2.png',
        'img/2.Enemy/3 Final-enemy/Attack/3.png',
        'img/2.Enemy/3 Final-enemy/Attack/4.png',
        'img/2.Enemy/3 Final-enemy/Attack/5.png',
        'img/2.Enemy/3 Final-enemy/Attack/6.png'
    ];

    IMAGES_HURT = [
        'img/2.Enemy/3 Final-enemy/Hurt/1.png',
        'img/2.Enemy/3 Final-enemy/Hurt/2.png',
        'img/2.Enemy/3 Final-enemy/Hurt/3.png',
        'img/2.Enemy/3 Final-enemy/Hurt/4.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    IMAGES_DEAD_END = [
        'img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];


    constructor() {
        super();
        this.loadImg(this.IMAGES_INTRODUCING[0]);
        this.loadImages(this.IMAGES_INTRODUCING);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_ATTACKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImg(this.IMAGES_DEAD_END);
    }


    animateIntroducedEndboss() {
        if (this.isHurtPoison() && this.energy > 0) {
            endbossPain.play();
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isDead() && !this.isDeadAnimationPlayed) {
            this.playAnimation(this.IMAGES_DEAD);
            this.isDeadAnimationPlayed = true;
        } else if (this.isDead() && this.isDeadAnimationPlayed) {
            let timeSpent = 0;
            let moveUpInterval = setInterval(() => {
                if (timeSpent < 2400) {
                    this.playAnimation(this.IMAGES_DEAD_END);
                    this.y -= 5;
                    timeSpent += 100;
                } else if (timeSpent >= 2400) {
                    clearInterval(moveUpInterval);
                }
            }, 100);
            clearAllIntervals();
            stopAllAudios();
            setTimeout(() => {
                win.play();
            }, 200);
            setTimeout(() => {
                win.pause();
                this.displayWinScreen();
                gameEnd.currentTime = 0;
                gameEnd.play();
            }, 2200);
        } else if (!this.isDead()) {
            this.playAnimation(this.IMAGES_SWIMMING);
        }
    }

    displayWinScreen() {
        const winMessage = document.getElementById('winScreen');

        noCanvas();
        winMessage.classList.remove('d-none');
    }


}