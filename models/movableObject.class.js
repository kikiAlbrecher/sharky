class MovableObject {
    x = 0;
    y = 80;
    width = 280;
    height = 280;
    img;
    imgCache = {};
    currentImage = 0;
    speed = 0.15;

    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(imgArray) {
        imgArray.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img; 
        });
    }

    moveRight() {
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIMMING.length;
            let path = this.IMAGES_SWIMMING[i];
            this.img = this.imgCache[path];
            this.currentImage++;
            this.x -= this.speed;
        }, 1000 / 12);
    }
}