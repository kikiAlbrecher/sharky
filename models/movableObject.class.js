class MovableObject {
    x = 0;
    y = 0;
    width = 720;
    height = 480;
    img;
    imgCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.001;
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };

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
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Pufferfish || this instanceof PufferfishRose || this instanceof Jellyfish || this instanceof Endboss || this instanceof Coin || this instanceof Poison) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    drawOffsetFrame(ctx) {
        if (this instanceof Character || this instanceof Pufferfish || this instanceof PufferfishRose || this instanceof Jellyfish || this instanceof Endboss || this instanceof Coin || this instanceof Poison) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x + this.offset.left, this.y + this.offset.top, this.width - this.offset.right - this.offset.left, this.height - this.offset.top - this.offset.bottom);
            ctx.stroke();
        }
    }

    isColliding(movableObject) {
        return (this.x + this.width - this.offset.right) > (movableObject.x + movableObject.offset.left) &&
            (this.y + this.height - this.offset.bottom) > (movableObject.y + movableObject.offset.top) &&
            (this.x + this.offset.left) < (movableObject.x + movableObject.width - movableObject.offset.right) &&
            (this.y + this.offset.top) < (movableObject.y + movableObject.height - movableObject.offset.bottom);
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_SWIMMING.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImage++;
    }

    moveOtherDirection(ctx) {
        ctx.save();
        ctx.translate(this.width, 0);
        ctx.scale(-1, 1);
        this.x = this.x * -1;
    }

    reverseMoveOtherDirection(ctx) {
        this.x = this.x * -1;
        ctx.restore();
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = false;
    }

    moveUp() {
        this.y -= 5;
    }

    moveDown() {
        this.y += 5;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() && !(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP)) {
                this.y += this.speedY;
                this.speedY += this.acceleration;
            }
        }, 1000 / 25);
    }









}