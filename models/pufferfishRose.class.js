class PufferfishRose extends Pufferfish {
    IMAGES_SWIMMING = [
        'img/2.Enemy/1.Pufferfish/1.Swim/2.swim1.png',
        'img/2.Enemy/1.Pufferfish/1.Swim/2.swim2.png',
        'img/2.Enemy/1.Pufferfish/1.Swim/2.swim3.png',
        'img/2.Enemy/1.Pufferfish/1.Swim/2.swim4.png',
        'img/2.Enemy/1.Pufferfish/1.Swim/2.swim5.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/1.Pufferfish/4.DIE/2.png'
    ];

    constructor(x, y) {
        super().loadImg(this.IMAGES_SWIMMING[0]);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_DEAD);
        this.x = x;
        this.y = y;
        this.checkSwimDirectionPuffer(x);
    }
}