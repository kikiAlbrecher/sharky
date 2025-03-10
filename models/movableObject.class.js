class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.001;
    energy = 100;
    energyReduction = 5;
    lastHit = 0;
    isSlapping = false;
    isDeadAnimationPlayed = false;
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };

    isColliding(movableObject) {
        return (this.x + this.width - this.offset.right) > (movableObject.x + movableObject.offset.left) &&
            (this.y + this.height - this.offset.bottom) > (movableObject.y + movableObject.offset.top) &&
            (this.x + this.offset.left) < (movableObject.x + movableObject.width - movableObject.offset.right) &&
            (this.y + this.offset.top) < (movableObject.y + movableObject.height - movableObject.offset.bottom);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
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
        setStoppableInterval(() => {
            if (this.isAboveGround() && !(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP)) {
                this.y += this.speedY;
                this.speedY += this.acceleration;
            }
        }, 1000 / 25);
    }

    hit() {
        if (this.energy > 0 && !this.isSlapping) {
            this.energy -= this.energyReduction;
            if (this.energy < 0) {
                this.energy = 0;
            } else {
                this.lastHit = new Date().getTime();
            }
        }
    }

    isHurtPoison() {
        let timeNow = new Date().getTime();
        let timespan = (timeNow - this.lastHit) / 1000;
        if (timespan <= 0.8) {
            return true;
        } else {
            return false;
        }
    }

    isDead() {
        return this.energy == 0;
    }



    // isStriked() {
    //     this.energy = 0;
    // }





}