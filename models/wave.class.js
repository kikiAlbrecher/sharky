class Wave extends MovableObject {
    speed = 0.1;

    constructor(imgPath, x) {
        super().loadImg(imgPath);
        this.x = x;
        this.animateWaves();
    }

    animateWaves() {
        setStoppableInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}