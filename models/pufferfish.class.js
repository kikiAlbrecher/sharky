class Pufferfish extends MovableObject {
    energyReduction = 5;
    offset = {
        top: 3,
        right: 6,
        bottom: 18,
        left: 1
    };

    IMAGES_SWIMMING = [
        '../img/2.Enemy/1.Pufferfish/1.Swim/1.swim1.png',
        '../img/2.Enemy/1.Pufferfish/1.Swim/1.swim2.png',
        '../img/2.Enemy/1.Pufferfish/1.Swim/1.swim3.png',
        '../img/2.Enemy/1.Pufferfish/1.Swim/1.swim4.png',
        '../img/2.Enemy/1.Pufferfish/1.Swim/1.swim5.png'
    ];

    constructor() {
        super().loadImg('../img/2.Enemy/1.Pufferfish/1.Swim/1.swim1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.x = 280 + Math.random() * 2240;
        this.y = 400 - Math.random() * 380;
        this.width = 48 + Math.random() * 24;
        this.height = this.width;
        this.speed = 1 + Math.random() * 4;
        this.animateSwimming();
    }

    animateSwimming() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 15);
    }
}