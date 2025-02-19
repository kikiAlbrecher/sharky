class Level {
    enemies;
    waterMovements;
    backgroundObjects;
    sunbeams;
    coinsToCollect;
    poisonToCollect;
    level_end_x = 2140;

    constructor(enemies, waterMovements, backgroundObjects, sunbeams, coinsToCollect, poisonToCollect) {
        this.enemies = enemies;
        this.waterMovements = waterMovements;
        this.backgroundObjects = backgroundObjects;
        this.sunbeams = sunbeams;
        this.coinsToCollect = coinsToCollect;
        this.poisonToCollect = poisonToCollect;
    }
}