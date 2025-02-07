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
    water = [
        new Water(),
    ];

    backgroundObjects = [
        new BackgroundObject('../img/3.Background/Layers/4.Fondo 2/D1.png', 440),
        new BackgroundObject('../img/3.Background/Layers/3.Fondo 1/D1.png', 440),
        new BackgroundObject('../img/3.Background/Layers/2. Floor/D1.png', 440),
        new BackgroundObject('../img/3.Background/Layers/1. Light/1.png', 480),
        // new BackgroundObject(),
        // new BackgroundObject(),
    ]

    canvas;
    ctx;
    keyboard;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.water);
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);

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
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
    }

    setWorld() {
        this.character.world = this;
    }
}