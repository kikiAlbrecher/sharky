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

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectsToMap(this.level.waterMovements);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.sunbeams);
        this.addObjectsToMap(this.level.objectsToCollect);
        this.addObjectsToMap(this.level.enemies);
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

    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    this.statusBarLife.setPercentage(this.character.energy);
                    console.log('Collision with character, energy: ', this.character.energy);
                }
            });
        }, 200);
    }

}