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
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        // this.checkItemsToCollect();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.level.waterMovements);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x / 2, 0);
        this.addObjectsToMap(this.level.sunbeams);
        this.ctx.translate(this.camera_x / 2, 0);
        this.addObjectsToMap(this.level.objectsToCollect);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
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
            this.checkCollisions();
            this.checkThrowObjects();

        }, 200);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarLife.setPercentage(this.character.energy);
                console.log('Collision with character, energy: ', this.character.energy);
            }
        });
    }

    // checkThrowObjects() {
    //     if (this.keyboard.THROW) {
    //         let bubble = new ThrowableObject(this.character.x + this.character.width - this.character.offset.right, this.character.y + this.character.height - this.character.offset.top, this.character.otherDirection);
    //         this.throwableObjects.push(bubble);
    //     }
    // }

    checkThrowObjects() {
        if (this.keyboard.THROW) {
            let bubbleX, bubbleY;

            if (!this.character.otherDirection) {
                bubbleX = this.character.x + this.character.width - this.character.offset.right;
            } else {
                bubbleX = this.character.x + this.character.offset.left;
            }

            bubbleY = this.character.y + this.character.height - this.character.offset.top + 20;

            let bubble = new ThrowableObject(bubbleX, bubbleY, this.character.otherDirection);
            this.throwableObjects.push(bubble);
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