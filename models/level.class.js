/**
 * Represents a game level containing various game elements such as enemies, water movements, 
 * background objects, sunbeams, coins, and poison to collect.
 */
class Level {
    enemies;
    waterMovements;
    backgroundObjects;
    sunbeams;
    coinsToCollect;
    poisonToCollect;
    level_end_x = 2880;

    /**
     * Creates an instance of the Level class.
     * 
     * @param {Object[]} enemies - The array of enemies to be placed in the level.
     * @param {Object[]} waterMovements - The array of water movements in the level.
     * @param {Object[]} backgroundObjects - The array of background objects in the level.
     * @param {Object[]} sunbeams - The array of sunbeams in the level.
     * @param {Object[]} coinsToCollect - The array of coins to be collected in the level.
     * @param {Object[]} poisonToCollect - The array of poison objects to be collected in the level.
     */
    constructor(enemies, waterMovements, backgroundObjects, sunbeams, coinsToCollect, poisonToCollect) {
        this.enemies = enemies;
        this.waterMovements = waterMovements;
        this.backgroundObjects = backgroundObjects;
        this.sunbeams = sunbeams;
        this.coinsToCollect = coinsToCollect;
        this.poisonToCollect = poisonToCollect;
    }
}