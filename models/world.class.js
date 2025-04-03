/**
 * Represents the game world, managing game objects, interactions, and rendering.
 * Handles the main game logic and drawing on the canvas.
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
    endboss;

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
        this.gameLogic = new GameLogic(this.character, this.level, this.statusBarLife, this.statusBarCoin, this.statusBarPoison, this.keyboard, this.endboss, this.throwableBubble, this.throwablePoison);
       
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
            this.gameLogic.checkCharacterCollisionsWithEnemy();
            this.gameLogic.checkCollectItems('coin');
            this.gameLogic.checkCollectItems('poison');
            this.gameLogic.checkThrowItem('bubble');
            this.gameLogic.checkThrowItem('poison');
            this.gameLogic.checkCollisionsWithThrowableObjects(Jellyfish, 'bubble');
            this.gameLogic.checkCollisionsWithThrowableObjects(Endboss, 'poison');
            this.gameLogic.checkCollisionsFinSlap();
        }, 1000 / 5);
        this.gameLogic.checkCharacterNearEndboss();
    }
}