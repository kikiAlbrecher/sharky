class World {
    canvas;
    ctx;
    character = new Character();
    level = level1;
    keyboard;
    camera_x = 0;
    statusBarLife = new StatusBarLife();
    statusBarCoin = new StatusBarCoin();
    statusBarPoison = new StatusBarPoison();
    throwableBubble = [];
    throwablePoison = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.level.waterMovements);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x / 2, 0);
        this.addObjectsToMap(this.level.sunbeams);
        this.ctx.translate(this.camera_x / 2, 0);
        this.addObjectsToMap(this.level.coinsToCollect);
        this.addObjectsToMap(this.level.poisonToCollect);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableBubble);
        this.addObjectsToMap(this.throwablePoison);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarLife);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarPoison);

        let self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(obj => {
            this.addToMap(obj);
        });
    }

    addToMap(movableObject) {
        if (movableObject.otherDirection) {
            movableObject.moveOtherDirection(this.ctx);
        }
        movableObject.draw(this.ctx);
        movableObject.drawFrame(this.ctx);
        movableObject.drawOffsetFrame(this.ctx);

        if (movableObject.otherDirection) {
            movableObject.reverseMoveOtherDirection(this.ctx);
        }
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisionsEnemy();
            this.checkCollisionsCoin();
            this.checkCollisionsPoison();
            this.checkThrowBubbles();
            this.checkThrowPoison();
        }, 200);
    }

    checkCollisionsEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarLife.setPercentage(this.character.energy);
                console.log('Collision with character, energy: ', this.character.energy);
            }
        });
    }

    checkCollisionsCoin() {
        this.level.coinsToCollect.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.collectCoins();
                this.statusBarCoin.setPercentage(this.character.coinAmount);
                this.statusBarCoin.setPercentage(this.character.bubblesAmount);
                console.log('Collision with character, coin: ', this.character.coinAmount);
                console.log('Collision with character, bubbles: ', this.character.bubblesAmount);
            }
        });
    }

    checkCollisionsPoison() {
        this.level.poisonToCollect.forEach((poison) => {
            if (this.character.isColliding(poison)) {
                this.character.collectPoison();
                this.statusBarPoison.setPercentage(this.character.poisonAmount);
                console.log('Collision with character, poison: ', this.character.poisonAmount);
                console.log('Collision with character, bubbles: ', this.character.bubblesAmount);
            }
        });
    }

    checkThrowBubbles() {
        if (this.keyboard.THROW) {
            let bubbleX, bubbleY;

            if (!this.character.otherDirection) {
                bubbleX = this.character.x + this.character.width - this.character.offset.right;
            } else {
                bubbleX = this.character.x + this.character.offset.left;
            }

            bubbleY = this.character.y + this.character.height - this.character.offset.top;

            let bubble = new ThrowableBubble(bubbleX, bubbleY, this.character.otherDirection);
            this.throwableBubble.push(bubble);
        }
    }

    checkThrowPoison() {
        if (this.keyboard.THROW_POISON) {
            let bubbleX, bubbleY;

            if (!this.character.otherDirection) {
                bubbleX = this.character.x + this.character.width - this.character.offset.right;
            } else {
                bubbleX = this.character.x + this.character.offset.left;
            }

            bubbleY = this.character.y + this.character.height - this.character.offset.top;

            let poison = new ThrowablePoison(bubbleX, bubbleY, this.character.otherDirection);
            this.throwablePoison.push(poison);
        }
    }


    // checkItemsToCollect() {
    //     setInterval(() => {
    //         this.level.objectsToCollect.forEach((object) => {
    //             if (this.character.isColliding(object)) {
    //                 this.character.collect();
    //                 this.statusBarPoison.setPercentage(this.character.energy);
    //                 console.log('Collision with character, energy: ', this.character.energy);
    //             }
    //         });
    //     }, 200);
    // }
}