class Wave extends MovableObject {
    speed = 0.08;

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