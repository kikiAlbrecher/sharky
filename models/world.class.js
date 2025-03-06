class World {
    canvas;
    ctx;
    character = new Character();
    level = level1;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    statusBarLife = new StatusBarLife();
    statusBarCoin = new StatusBarCoin();
    statusBarPoison = new StatusBarPoison();
    throwableBubble = [];
    throwablePoison = [];
    endboss;
    hadFirstContact = false;
    endbossIsIntroduced = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
        this.draw();
        this.setWorld();
        this.runChecks();
    }

    draw() {
        if (this.character) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.translate(this.camera_x, 0);
            this.addObjectsToMap(this.level.waterMovements);
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
            this.addToMap(this.statusBar);
            this.addToMap(this.statusBarLife);
            this.addToMap(this.statusBarCoin);
            this.addToMap(this.statusBarPoison);
        }

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

    runChecks() {
        setInterval(() => {
            this.checkCharacterCollisionsWithEnemy();
            this.checkCollectItems('coin');
            this.checkCollectItems('poison');
            this.checkThrowItem('bubble');
            this.checkThrowItem('poison');
            this.checkCollisionsWithThrowableObjects(Jellyfish, 'bubble');
            this.checkCollisionsWithThrowableObjects(Endboss, 'poison');
            this.checkCollisionsFinSlap();
        }, 1000 / 5);
        this.checkCharacterNearEndboss();
    }

    checkCharacterCollisionsWithEnemy() {
        if (!this.character) return;

        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof Jellyfish || enemy instanceof Pufferfish || enemy instanceof PufferfishRose || enemy instanceof Endboss) {
                if (this.character.isColliding(enemy) && !enemy.isDead()) {
                    console.log(`Hit detected by ${enemy.constructor.name}`);
                    this.character.hit();
                    pain.play();
                    this.statusBarLife.setPercentage(this.character.energy);
                    console.log('Collision with character, energy: ', this.character.energy);
                    if (this.character.energy <= 0) {
                        this.character.energy = 0;
                        this.character.playAnimation(this.character.IMAGES_DEAD_POISON);
                        this.character = null;
                    } else {
                        this.character.playAnimation(this.character.IMAGES_HURT_POISON);
                    }
                    console.log('Character energy after hit: ', this.energy);
                }
            }
        });
    }

    checkCollisionsWithThrowableObjects(enemyType, type) {
        this.level.enemies.forEach(enemy => {
            if (enemy instanceof enemyType) {
                this[`throwable${type.charAt(0).toUpperCase() + type.slice(1)}`].forEach(object => {
                    if (enemy.isColliding(object)) {
                        console.log(`${enemy.constructor.name} energy: `, enemy.energy);
                        enemy.hit();
                        if (enemy.energy <= 0) {
                            enemy.energy = 0;
                            enemy.playAnimation(enemy.IMAGES_DEAD);
                        }
                        console.log(`${enemy.constructor.name} energy after hit: `, enemy.energy);

                        const objectIndex = this[`throwable${type.charAt(0).toUpperCase() + type.slice(1)}`].indexOf(object);
                        if (objectIndex >= 0) this[`throwable${type.charAt(0).toUpperCase() + type.slice(1)}`].splice(objectIndex, 1);
                    }
                });
            }
        });
    }

    checkCollisionsFinSlap() {
        if (!this.character) return;

        if (this.character.isSlapping && !this.character.isDead()) {
            this.level.enemies.forEach(enemy => {
                if (enemy instanceof Pufferfish || enemy instanceof PufferfishRose || enemy instanceof Endboss) {
                    if (enemy.isColliding(this.character)) {
                        console.log(`Hit detected on ${enemy.constructor.name}`);
                        enemy.hit();
                        if (enemy.energy <= 0) {
                            enemy.energy = 0;
                            enemy.playAnimation(enemy.IMAGES_DEAD);
                        }
                        console.log('enemy energy after hit: ', enemy.energy);
                    }
                }
            });
        }
    }

    checkCollectItems(itemType) {
        if (!this.character) return;

        const { itemsToCollect, collectMethod, statusBar, amountProperty } = this.getItemProperties(itemType);

        this.processCollisions(itemsToCollect, collectMethod, statusBar, amountProperty);
    }

    getItemProperties(itemType) {
        if (!this.character) return {};

        switch (itemType) {
            case 'coin':
                return {
                    itemsToCollect: this.level.coinsToCollect,
                    collectMethod: this.character.collectCoins,
                    statusBar: this.statusBarCoin,
                    amountProperty: 'coinAmount'
                };
            case 'poison':
                return {
                    itemsToCollect: this.level.poisonToCollect,
                    collectMethod: this.character.collectPoison,
                    statusBar: this.statusBarPoison,
                    amountProperty: 'poisonAmount'
                };
        }
    }

    processCollisions(itemsToCollect, collectMethod, statusBar, amountProperty) {
        itemsToCollect.forEach((item, index) => {
            if (this.character.isColliding(item)) {
                if (this.character[amountProperty] < 100) {
                    collectMethod.call(this.character);
                    statusBar.setPercentage(this.character[amountProperty]);
                    console.log(`Collision with character, ${amountProperty}: `, this.character[amountProperty]);
                    console.log('Collision with character, bubbles: ', this.character.bubblesAmount);

                    itemsToCollect.splice(index, 1);
                }
            }
        });
    }

    checkThrowItem(itemType) {
        if (!this.character) return;

        const { itemX, itemY } = this.calculateThrowPosition();

        switch (itemType) {
            case 'bubble':
                this.throwBubble(itemX, itemY);
                break;
            case 'poison':
                this.throwPoison(itemX, itemY);
                break;
        }
    }

    calculateThrowPosition() {
        if (!this.character) return { itemX: 0, itemY: 0 };

        let itemX, itemY;

        if (!this.character.otherDirection) {
            itemX = this.character.x + this.character.width - this.character.offset.right;
        } else {
            itemX = this.character.x + this.character.offset.left;
        }

        itemY = this.character.y + this.character.height - this.character.offset.top;

        return { itemX, itemY };
    }

    throwBubble(itemX, itemY) {
        if (this.keyboard.THROW && this.character.coinAmount > 0) {
            let bubble = new ThrowableBubble(itemX, itemY, this.character.otherDirection);
            this.throwableBubble.push(bubble);
            console.log(this.throwableBubble, this.throwablePoison);
            this.updateStatusbar('coin');
        }
    }

    throwPoison(itemX, itemY) {
        if (this.keyboard.THROW_POISON && this.character.poisonAmount > 0) {
            let poison = new ThrowablePoison(itemX, itemY, this.character.otherDirection);
            this.throwablePoison.push(poison);
            this.updateStatusbar('poison');
        }
    }

    updateStatusbar(type) {
        let amount = this.character[`${type}Amount`];
        let delta = this.character[`${type}Delta`];

        if (amount > 0) {
            this.character[`${type}Amount`] -= delta;
            this.character.bubblesAmount -= this.character.bubblesDelta;
            this[`statusBar${type.charAt(0).toUpperCase() + type.slice(1)}`].setPercentage(amount - delta);
            console.log(`Throw ${type}, ${type}Amount: `, amount - delta);
            console.log('Throw, bubbles: ', this.character.bubblesAmount);
        }
    }

    checkCharacterNearEndboss() {
        let frameCount = 0;

        setInterval(() => {
            if (this.character) {
                if (this.character.x <= 2300 && !this.hadFirstContact) {
                    return;
                }
            }

            if (this.character) {
                if (this.character.x > 2300 && !this.hadFirstContact) {
                    this.endboss.playAnimation(this.endboss.IMAGES_INTRODUCING);
                    frameCount++;

                    if (frameCount === 10) {
                        this.hadFirstContact = true;
                        frameCount = 0;
                        this.endboss.playAnimation(this.endboss.IMAGES_SWIMMING);
                    }

                } else if (this.hadFirstContact) {
                    this.endboss.animateIntroducedEndboss();
                }
            }
        }, 150);
    }






}