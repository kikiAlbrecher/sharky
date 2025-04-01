/**
 * Represents an object that can be moved and interacted with in the game world.
 * It inherits from the `DrawableObject` class and adds movement functionality, collision detection, 
 * gravity application, and energy management.
 *
 * @extends DrawableObject
 */
class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 0.001;
    energy = 100;
    energyReduction = 10;
    lastHit = 0;
    isSlapping = false;
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };

    /**
    * Checks if this object is colliding with another movable object.
    *
    * @param {MovableObject} movableObject - The other object to check collision with.
    * @returns {boolean} `true` if the objects are colliding, `false` otherwise.
    */
    isColliding(movableObject) {
        return (this.x + this.width - this.offset.right) > (movableObject.x + movableObject.offset.left) &&
            (this.y + this.height - this.offset.bottom) > (movableObject.y + movableObject.offset.top) &&
            (this.x + this.offset.left) < (movableObject.x + movableObject.width - movableObject.offset.right) &&
            (this.y + this.offset.top) < (movableObject.y + movableObject.height - movableObject.offset.bottom);
    }

    /**
     * Plays an animation by cycling through a set of images.
     *
     * @param {string[]} images - The array of image paths to cycle through.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imgCache[path];
        this.currentImage++;
    }

    /**
     * Moves the object in the opposite direction (flips its orientation).
     * 
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
     */
    moveOtherDirection(ctx) {
        ctx.save();
        ctx.translate(this.width, 0);
        ctx.scale(-1, 1);
        this.x = this.x * -1;
    }

    /**
     * Reverses the movement of the object back to its original orientation.
     * 
     * @param {CanvasRenderingContext2D} ctx - The 2D rendering context of the canvas.
     */
    reverseMoveOtherDirection(ctx) {
        this.x = this.x * -1;
        ctx.restore();
    }

    /**
     * Moves the object to the right.
     */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    /**
     * Moves the object to the left.
     */
    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = false;
    }

    /**
     * Moves the object upwards.
     */
    moveUp() {
        this.y -= 5;
    }

    /**
     * Moves the object downwards.
     */
    moveDown() {
        this.y += 5;
    }

    /**
     * Applies gravity to the object, causing it to fall if it is not grounded.
     */
    applyGravity() {
        setStoppableInterval(() => {
            if (this.isAboveGround() && !(this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP)) {
                this.y += this.speedY;
                this.speedY += this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * Collects coins. The coin amount will increase by a fixed delta up to a maximum of 100.
     * Plays the 'collectedCoin' sound and calls the collectBubbles method.
     */
    collectCoins() {
        if (this.coinAmount < 100) {
            this.coinAmount += this.coinDelta;
            collectedCoin.play();
            this.collectBubbles();
        }
    }

    /**
     * Collects poison. The poison amount will increase by a fixed delta up to a maximum of 100.
     * Plays the 'collectedPoison' sound and calls the collectBubbles method.
     */
    collectPoison() {
        if (this.poisonAmount < 100) {
            this.poisonAmount += this.poisonDelta;
            collectedPoison.play();
            this.collectBubbles();
        }
    }

    /**
     * Collects bubbles. The bubbles amount will increase by a fixed delta up to a maximum of 100.
     */
    collectBubbles() {
        if (this.bubblesAmount < 100) this.bubblesAmount += this.bubblesDelta;
    }

    /**
     * Reduces the object's energy when it is hit, and updates the timestamp of the last hit.
     */
    hit() {
        if (this.energy > 0 && !this.isSlapping) {
            this.energy -= this.energyReduction;
            if (this.energy < 0) this.energy = 0;
            else this.lastHit = new Date().getTime();
        }
    }

    /**
     * Checks if the object is currently hurt by poison (within a certain time span of the last hit).
     *
     * @returns {boolean} `true` if the object is hurt by poison, `false` otherwise.
     */
    isHurtPoison() {
        let timeNow = new Date().getTime();
        let timespan = (timeNow - this.lastHit) / 1000;
        if (timespan <= 0.8) return true;
        else return false;
    }

    /**
     * Checks if the object is dead (i.e., its energy is zero).
     *
     * @returns {boolean} `true` if the object is dead, `false` otherwise.
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * Checks the swimming direction of a puffer fish-like object.
     * The object switches directions when it reaches a certain X-coordinate threshold.
     * 
     * @param {number} x - The reference X-coordinate to check the swimming direction.
     */
    checkSwimDirectionPuffer(x) {
        setInterval(() => {
            if (this.x <= x - 100 - Math.random() * 168) this.otherDirection = true;
            else if (this.x >= x + 100 + Math.random() * 168) this.otherDirection = false;

            switch (this.otherDirection) {
                case true: this.x += this.speed;
                    break;
                default: this.x -= this.speed;
                    break;
            }
        }, 1000 / 10);
    }
}