class DrawableObject {
    img;
    imgCache = {};
    currentImage = 0;
    x = 0;
    y = 0;
    width = 720;
    height = 480;

    /**
     * Loads an image from the specified path.
    * @param {string} path - The path to the image to be loaded.
    */
    loadImg(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Loads multiple images from an array of paths and caches them.
     * @param {string[]} imgArray - An array of paths to the images to be loaded.
     */
    loadImages(imgArray) {
        imgArray.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }

    /**
     * Draws the loaded image onto the canvas at the specified position and size.
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
     * @throws {Error} If there is an error drawing the image (e.g., image not loaded).
     */
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