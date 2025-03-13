class Pufferfish extends MovableObject {
    energy = 5;
    energyReduction = 5;
    offset = {
        top: 3,
        right: 6,
        bottom: 18,
        left: 1
    };

    IMAGES_SWIMMING = [
        'img/2.Enemy/1.Pufferfish/1.Swim/1.swim1.png',
        'img/2.Enemy/1.Pufferfish/1.Swim/1.swim2.png',
        'img/2.Enemy/1.Pufferfish/1.Swim/1.swim3.png',
        'img/2.Enemy/1.Pufferfish/1.Swim/1.swim4.png',
        'img/2.Enemy/1.Pufferfish/1.Swim/1.swim5.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/1.Pufferfish/4.DIE/1.Dead 1 (can animate by going up).png'
    ]

    constructor() {
        super().loadImg(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = 280 + Math.random() * 2240;
        this.y = 400 - Math.random() * 380;
        this.width = 48 + Math.random() * 24;
        this.height = this.width;
        this.speed = 1 + Math.random() * 4;
        this.loadImages(this.IMAGES_DEAD);
        this.animatePufferfish();
    }

    animatePufferfish() {
        setStoppableInterval(() => {
            if (this.energy > 0) {
                this.moveLeft();
            } else {
                this.pufferDead();
            }
        }, 1000 / 15);
    }

    pufferDead() {
        this.playAnimation(this.IMAGES_DEAD);

        this.x -= 16;
        this.y -= 24;

        if (this.x < -this.width || this.y < -this.height) {
            this.x = -this.width;
            this.y = -this.height;
        }
    }
}