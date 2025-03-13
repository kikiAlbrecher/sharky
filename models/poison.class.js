class Poison extends MovableObject {
    width = 50;
    height = 60;
    offset = {
        top: 27,
        right: 10,
        bottom: 3,
        left: 10
    };

    IMAGES_POISON = [
        'img/4.Marcadores/Posión/Dark - Left.png',
    ];

    constructor() {
        super().loadImg(this.IMAGES_POISON);
        this.x = 380 + Math.random() * 440 * 4;
        this.y = 400 - Math.random() * 60;
    }
}