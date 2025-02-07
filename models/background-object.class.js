class BackgroundObject extends MovableObject {
    width = 720;

    constructor(imgPath, x, height) {
        super().loadImg(imgPath);
        this.x = x;
        this.height = height;
        this.y = 480 - this.height;
    }
}