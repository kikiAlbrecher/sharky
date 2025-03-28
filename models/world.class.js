/**
 * Represents the game world, managing the game objects, interactions, and rendering.
 */
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
    lastBubbleThrowTime = 0;
    lastPoisonThrowTime = 0;
    throwCooldown = 400;
    endboss;
    hadFirstContact = false;
    endbossIsHurt = false;
    isDeadAnimationPlayed = false;

    /**
     * Creates an instance of the World.
     * @param {HTMLCanvasElement} canvas - The canvas element where the game is drawn.
     * @param {Keyboard} keyboard - The keyboard object for detecting key events (keyboard is in game.js).
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.endboss = this.level.enemies.find(enemy => enemy instanceof Endboss);
        this.draw();
        this.setWorld();
        this.runChecks();
    }

    /**
     * Draws all objects in the world on the canvas, applying camera and transformations.
     */
    draw() {
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

        let self = this;
        requestAnimationFrame(() => self.draw());
    }

    /**
     * Adds a list of objects to the game map.
     * @param {Array} objects - The array of objects to add to the map.
     */
    addObjectsToMap(objects) {
        objects.forEach(obj => this.addToMap(obj));
    }

    /**
     * Adds an individual movable object to the map.
     * @param {MovableObject} movableObject - The object to add to the map.
     */
    addToMap(movableObject) {
        if (movableObject.otherDirection) movableObject.moveOtherDirection(this.ctx);
        movableObject.draw(this.ctx);
        if (movableObject.otherDirection) movableObject.reverseMoveOtherDirection(this.ctx);
    }

    /**
     * Sets the world for the character, associating them with this instance.
     */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Runs the main game checks at regular intervals to handle game logic.
     */
    runChecks() {
        setStoppableInterval(() => {
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

    /**
     * Checks for collisions between the character and enemies in the game.
     */
    checkCharacterCollisionsWithEnemy() {
        if (!this.character) return;
        this.level.enemies.forEach((enemy) => {
            if (enemy instanceof Jellyfish || enemy instanceof Pufferfish || enemy instanceof PufferfishRose || enemy instanceof Endboss) {
                if (this.character.isColliding(enemy) && !enemy.isDead()) {
                    this.character.hit();
                    this.statusBarLife.setPercentage(this.character.energy);
                }
            }
        });
    }

    /**
     * Checks for collisions between throwable objects and enemies of a given type.
     * @param {Function} enemyType - The enemy type to check against.
     * @param {string} type - The type of throwable object (e.g., 'bubble' or 'poison').
     */
    checkCollisionsWithThrowableObjects(enemyType, type) {
        this.level.enemies.forEach(enemy => {
            if (enemy instanceof enemyType) {
                this[`throwable${type.charAt(0).toUpperCase() + type.slice(1)}`].forEach(object => {
                    if (enemy.isColliding(object)) {
                        const objectIndex = this[`throwable${type.charAt(0).toUpperCase() + type.slice(1)}`].indexOf(object);

                        enemy.hit();
                        if (objectIndex >= 0) this[`throwable${type.charAt(0).toUpperCase() + type.slice(1)}`].splice(objectIndex, 1);
                    };
                });
            };
        });
    }

    /**
     * Checks if the character is performing a fin slap and if it hits any enemies.
     */
    checkCollisionsFinSlap() {
        if (this.character.isSlapping && !this.character.isDead()) {
            this.level.enemies.forEach(enemy => {
                if (enemy instanceof Pufferfish || enemy instanceof PufferfishRose || enemy instanceof Endboss) {
                    if (enemy.isColliding(this.character)) enemy.hit();
                }
            });
        }
    }

    /**
     * Checks for item collection by the character, such as coins or poison.
     * @param {string} itemType - The type of item to check (e.g., 'coin' or 'poison').
     */
    checkCollectItems(itemType) {
        const { itemsToCollect, collectMethod, statusBar, amountProperty } = this.getItemProperties(itemType);

        if (!this.character) return;
        this.processCollisions(itemsToCollect, collectMethod, statusBar, amountProperty);
    }

    /**
     * Gets the properties for a specific item type (coin or poison).
     * @param {string} itemType - The type of item (e.g., 'coin' or 'poison').
     * @returns {Object} - The properties related to the item type.
     */
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

    /**
     * Processes the collision of the character with collectible items and updates the relevant properties.
     * @param {Array} itemsToCollect - The list of items to collect.
     * @param {Function} collectMethod - The method used to collect the item.
     * @param {StatusBar} statusBar - The status bar to update.
     * @param {string} amountProperty - The property representing the amount of collected items.
     */
    processCollisions(itemsToCollect, collectMethod, statusBar, amountProperty) {
        itemsToCollect.forEach((item, index) => {
            if (this.character.isColliding(item)) {
                if (this.character[amountProperty] < 100) {
                    collectMethod.call(this.character);
                    statusBar.setPercentage(this.character[amountProperty]);
                    itemsToCollect.splice(index, 1);
                }
            }
        });
    }

    /**
     * Checks if the character is throwing a specific item (bubble or poison).
     * @param {string} itemType - The type of item to throw (e.g., 'bubble' or 'poison').
     */
    checkThrowItem(itemType) {
        const { itemX, itemY } = this.calculateThrowPosition();

        if (!this.character) return;
        switch (itemType) {
            case 'bubble': this.throwBubble(itemX, itemY);
                break;
            case 'poison': this.throwPoison(itemX, itemY);
                break;
        }
    }

    /**
     * Calculates the position where the character throws an item.
     * @returns {Object} - The calculated x and y position of the thrown item.
     */
    calculateThrowPosition() {
        let itemX, itemY;

        if (!this.character) return { itemX: 0, itemY: 0 };
        if (!this.character.otherDirection) itemX = this.character.x + this.character.width - this.character.offset.right;
        else itemX = this.character.x + this.character.offset.left;
        itemY = this.character.y + this.character.height - this.character.offset.top;
        return { itemX, itemY };
    }

    /**
     * Throws a bubble from the character's position.
     * @param {number} itemX - The x position to throw the bubble from.
     * @param {number} itemY - The y position to throw the bubble from.
     */
    throwBubble(itemX, itemY) {
        if (this.keyboard.THROW && this.character.coinAmount > 0) {
            let currentTime = Date.now();

            if (currentTime - this.lastBubbleThrowTime >= this.throwCooldown) {
                let bubble = new ThrowableBubble(itemX, itemY, this.character.otherDirection);
                this.throwableBubble.push(bubble);
                this.updateStatusbar('coin');
                this.lastBubbleThrowTime = currentTime;
            }
        }
    }

    /**
     * Throws poison from the character's position.
     * @param {number} itemX - The x position to throw the poison from.
     * @param {number} itemY - The y position to throw the poison from.
     */
    throwPoison(itemX, itemY) {
        if (this.keyboard.THROW_POISON && this.character.poisonAmount > 0) {
            let currentTime = Date.now();

            if (currentTime - this.lastPoisonThrowTime >= this.throwCooldown) {
                let poison = new ThrowablePoison(itemX, itemY, this.character.otherDirection);
                this.throwablePoison.push(poison);
                this.updateStatusbar('poison');
                this.lastPoisonThrowTime = currentTime;
            }
        }
    }

    /**
     * Updates the status bar for a specific item (coin or poison).
     * @param {string} type - The type of item to update the status bar for (e.g., 'coin' or 'poison').
     */
    updateStatusbar(type) {
        let amount = this.character[`${type}Amount`];
        let delta = this.character[`${type}Delta`];

        if (amount > 0) {
            this.character[`${type}Amount`] -= delta;
            this.character.bubblesAmount -= this.character.bubblesDelta;
            this[`statusBar${type.charAt(0).toUpperCase() + type.slice(1)}`].setPercentage(amount - delta);
        }
    }

    /**
     * Checks if the character is near the end boss and triggers related events.
     * It handles the appearance, attacks, death, and interaction with the endboss.
     */
    checkCharacterNearEndboss() {
        let frameCount = 0;

        setStoppableInterval(() => {
            if (this.character && this.character.x <= 2400 && !this.hadFirstContact) return;
            if (this.character && this.character.x > 2400 && !this.hadFirstContact) {
                this.endboss.playImagesIntroducing();
                frameCount++;
                if (frameCount === 10) {
                    frameCount = 0;
                    this.endbossAppeared();
                }
            } else if (this.character && this.hadFirstContact && !this.endboss.isDead()) this.endbossAttacksSharky();
            else if (this.character && this.endboss.isDead() && !this.isDeadAnimationPlayed) this.endbossDies();
            else if (this.character && this.endboss.isDead() && this.isDeadAnimationPlayed) this.endbossIsDead();
            else if (this.character) this.endboss.playImagesSwimming();
        }, 176);
    }

    /**
     * Triggered when the endboss first appears, initiating animations and interaction.
     */
    endbossAppeared() {
        this.hadFirstContact = true;
        this.endboss.playAnimation(this.endboss.IMAGES_SWIMMING);
    }

    /**
     * Handles the endboss's attack on the character and manages its state when hurt by poison.
     */
    endbossAttacksSharky() {
        this.endbossAttacks();
        if (this.endboss.isHurtPoison() && this.endboss.energy > 0) {
            this.endboss.playImagesHurt();
            this.endbossIsHurt = true;
            setTimeout(() => {
                this.endbossAttacks();
                this.endbossIsHurt = false;
            }, 160);
        }
    }

    /**
     * Controls the attack behavior of the endboss, including movement and animation.
     */
    endbossAttacks() {
        if (this.endbossIsHurt) return;
        this.endboss.playAnimation(this.endboss.IMAGES_ATTACKING);
        setStoppableInterval(() => {
            if (!this.endboss.isDead() && !this.character.isDead()) {
                if (this.character.x > this.endboss.x) {
                    this.endboss.moveRight();
                    this.endboss.otherDirection = true;
                } else if (this.character.x < this.endboss.x) this.endboss.moveLeft();
                if (this.character.y > this.endboss.y && this.endboss.y < 110) this.endboss.moveDown();
                else if (this.character.y < this.endboss.y) this.endboss.moveUp();
            }
        }, 1000);
    }

    /**
     * Handles the endboss's death sequence and animation.
     */
    endbossDies() {
        this.endbossIsHurt = false;
        this.endboss.playImagesDead();
        this.isDeadAnimationPlayed = true;
    }

    /**
     * Controls the endboss's post-death behavior, including the lifting animation and game end sequence.
     */
    endbossIsDead() {
        let timeSpent = 0;

        this.endboss.stopPlayStartWinAudios();
        let moveUpInterval = setInterval(() => {
            if (timeSpent < 2400) {
                this.endboss.liftUpEndboss();
                timeSpent += 100;
            } else if (timeSpent >= 2400) {
                clearInterval(moveUpInterval);
                this.showGameEndWin();
            }
        }, 1000 / 20);
        clearAllIntervals();
    }

    /**
     * Triggers the game win sequence after the endboss is defeated.
     */
    showGameEndWin() {
        this.spliceEndboss();
        this.endboss.showWin();
    }

    /**
     * Removes the endboss from the list of enemies in the current level.
     */
    spliceEndboss() {
        const endbossIndex = this.level.enemies.findIndex(enemy => enemy instanceof Endboss);
        this.level.enemies.splice(endbossIndex, 1);
    }
}