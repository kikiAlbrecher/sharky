class Water extends MovableObject {
    x = 0;
    y = 0;
    width = 720;
    height = 480;
    speed = 0.25;

    IMAGES_WATER = [
        '../img/3.Background/Layers/5. Water/D1.png',
        '../img/3.Background/Layers/5. Water/D2.png',
    ];
    currentImage = 0;

    constructor() {
        super().loadImg('../img/3.Background/Layers/5. Water/D1.png');
        this.loadImages(this.IMAGES_WATER);
        this.animateWater();
    }

    animateWater() {
        // setInterval(() => {
            let i = this.currentImage % this.IMAGES_WATER.length;
            let path = this.IMAGES_WATER[i];
            this.img = this.imgCache[path];
            this.currentImage++;
            // this.x -= this.speed;
        // }, 1000 / 30);
    }
}