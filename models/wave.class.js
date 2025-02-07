class Wave extends MovableObject {
    y = 0;
    width = 720;
    height = 480;
    speed = 0.05;

    constructor(imgPath, x) {
        super().loadImg(imgPath);
        this.x = x;
        this.animateWaves();
    }

    animateWaves() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}