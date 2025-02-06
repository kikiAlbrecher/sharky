class PufferfishRose extends Pufferfish {
    width = 70;
    height = 70;

    IMAGES_SWIMMING = [
        '../img/2.Enemy/1.Pufferfish/1.Swim/2.swim1.png',
        '../img/2.Enemy/1.Pufferfish/1.Swim/2.swim2.png',
        '../img/2.Enemy/1.Pufferfish/1.Swim/2.swim3.png',
        '../img/2.Enemy/1.Pufferfish/1.Swim/2.swim4.png',
        '../img/2.Enemy/1.Pufferfish/1.Swim/2.swim5.png',
    ];

    constructor() {
        super().loadImg('../img/2.Enemy/1.Pufferfish/1.Swim/2.swim1.png');
        this.loadImages(this.IMAGES_SWIMMING);
    }
}