class Sunbeam extends MovableObject {
    width = 2160;
    speed = 0.12;

    constructor(imgPath, x) {
        super().loadImg(imgPath);
        this.x = x;
        // this.animateWaves();
    }

    // animateWaves() {
    //     setInterval(() => {
    //         this.x += this.speed;
    //     }, 1000 / 60);
    // }
}