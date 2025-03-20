class Wave extends MovableObject {
    constructor(imgPath, x) {
        super().loadImg(imgPath);
        this.x = x;
    }
}