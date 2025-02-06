class BackgroundObject extends MovableObject {
    width = 720;

    constructor(imgPath, height) {
        super().loadImg(imgPath);
        this.x = 720 - this.width;
        this.height = height;
        this.y = 480 - this.height;
    }
}