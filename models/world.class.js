class World {
    character = new Character();
    enemies = [
        new Pufferfish(),
        new PufferfishRose(),
        new Pufferfish(),
        new PufferfishRose(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new PufferfishRose(),
        new Pufferfish(),
        new Jellyfish,
        new Jellyfish,
        new Jellyfish
    ];
    waterMovements = [
        new Wave('../img/3.Background/Layers/5. Water/D1.png', 0),
        new Wave('../img/3.Background/Layers/5. Water/D2.png', 715),
    ];
    backgroundObjects = [
        new BackgroundObject('../img/3.Background/Layers/4.Fondo 2/D1.png', 719 * -2),
        new BackgroundObject('../img/3.Background/Layers/3.Fondo 1/D1.png', 719 * -2),
        new BackgroundObject('../img/3.Background/Layers/2. Floor/D1.png', 719 * -2),
        // new BackgroundObject('../img/3.Background/Layers/1. Light/1.png', 719 * -2),
        new BackgroundObject('../img/3.Background/Layers/4.Fondo 2/D2.png', 719 * -1),
        new BackgroundObject('../img/3.Background/Layers/3.Fondo 1/D2.png', 719 * -1),
        new BackgroundObject('../img/3.Background/Layers/2. Floor/D2.png', 719 * -1),
        // new BackgroundObject('../img/3.Background/Layers/1. Light/2.png', 719 * -1),

        new BackgroundObject('../img/3.Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('../img/3.Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('../img/3.Background/Layers/2. Floor/D1.png', 0),
        // new BackgroundObject('../img/3.Background/Layers/1. Light/1.png', 0),
        new BackgroundObject('../img/3.Background/Layers/4.Fondo 2/D2.png', 719),
        new BackgroundObject('../img/3.Background/Layers/3.Fondo 1/D2.png', 719),
        new BackgroundObject('../img/3.Background/Layers/2. Floor/D2.png', 719),
        // new BackgroundObject('../img/3.Background/Layers/1. Light/2.png', 719),

        new BackgroundObject('../img/3.Background/Layers/4.Fondo 2/D1.png', 719 * 2),
        new BackgroundObject('../img/3.Background/Layers/3.Fondo 1/D1.png', 719 * 2),
        new BackgroundObject('../img/3.Background/Layers/2. Floor/D1.png', 719 * 2),
        // new BackgroundObject('../img/3.Background/Layers/1. Light/1.png', 719 * 2),
        new BackgroundObject('../img/3.Background/Layers/4.Fondo 2/D2.png', 719 * 3),
        new BackgroundObject('../img/3.Background/Layers/3.Fondo 1/D2.png', 719 * 3),
        new BackgroundObject('../img/3.Background/Layers/2. Floor/D2.png', 719 * 3),
        // new BackgroundObject('../img/3.Background/Layers/1. Light/2.png', 719 * 3),
    ];
    sunbeams = [
        // new Sunbeam('../img/3.Background/Layers/1. Light/COMPLETO.png'),
        new Sunbeam('../img/3.Background/Layers/1. Light/1.png', -1440),
        new Sunbeam('../img/3.Background/Layers/1. Light/2.png', 717),
    ];

    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.waterMovements);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.sunbeams);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);


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
            this.ctx.save();
            this.ctx.translate(movableObject.width, 0);
            this.ctx.scale(-1, 1);
            movableObject.x = movableObject.x * -1;
        }
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
        if (movableObject.otherDirection) {
            movableObject.x = movableObject.x * -1;
            this.ctx.restore();
        }
    }

    setWorld() {
        this.character.world = this;
    }
}