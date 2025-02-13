class Level {
    enemies;
    waterMovements;
    backgroundObjects;
    sunbeams;
    level_end_x = 2140;

    constructor(enemies, waterMovements, backgroundObjects, sunbeams) {
        this.enemies = enemies;
        this.waterMovements = waterMovements;
        this.backgroundObjects = backgroundObjects;
        this.sunbeams = sunbeams;
    }
}