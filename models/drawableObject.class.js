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

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Pufferfish || this instanceof PufferfishRose || this instanceof Jellyfish || this instanceof Endboss || this instanceof Coin || this instanceof AnimatedCoin || this instanceof Poison || this instanceof AnimatedPoison || this instanceof ThrowableBubble || this instanceof ThrowablePoison) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawOffsetFrame(ctx) {
        if (this instanceof Character || this instanceof Pufferfish || this instanceof PufferfishRose || this instanceof Jellyfish || this instanceof Endboss || this instanceof Coin || this instanceof AnimatedCoin || this instanceof Poison || this instanceof AnimatedPoison || this instanceof ThrowableBubble || this instanceof ThrowablePoison) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right - this.offset.left, this.height - this.offset.top - this.offset.bottom);
            ctx.stroke();
        }
    }
}