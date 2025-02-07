class Pufferfish extends MovableObject {
    // width = 60;
    // height = 60;
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
        this.x = 280 + Math.random() * 440;
        this.y = 400 - Math.random() * 380;
        this.width = 48 + Math.random() * 24;
        this.height = this.width;
        this.speed = 1 + Math.random() * 4;
        this.animateSwimming();
    }

    animateSwimming() {
        this.moveLeft();
    }
}