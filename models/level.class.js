class Level {
    enemies;
    waterMovements;
    backgroundObjects;
    sunbeams;
    objectsToCollect;
    level_end_x = 2140;

    constructor(enemies, waterMovements, backgroundObjects, sunbeams, objectsToCollect) {
        this.enemies = enemies;
        this.waterMovements = waterMovements;
        this.backgroundObjects = backgroundObjects;
        this.sunbeams = sunbeams;
        this.objectsToCollect = objectsToCollect;
    }
}