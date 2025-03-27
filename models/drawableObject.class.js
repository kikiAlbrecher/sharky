class DrawableObject {
    img;
    imgCache = {};
    currentImage = 0;
    x = 0;
    y = 0;
    width = 720;
    height = 480;

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

    draw(ctx) {
        try {
            if (this.img) {
                ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
            }
        } catch (e) {
            console.log('Error loading image', this.img ? this.img.src : 'Unknown');
        }
    }
}