let level1;

/**
 * Initializes Level 1 with all its objects, including enemies, background layers, collectibles, and other objects.
 * This function sets up the environment for the game level, placing enemies, background objects, sunbeams, and collectibles
 * in their respective positions. It also creates a level instance that encapsulates all the necessary elements for the level.
 */
function initLevel1() {
    level1 = new Level(
        /**
         * Enemies present in level 1.
         * @type {Array.<Enemy>}
         */
        [
            // new Pufferfish(800, 200),
            // new Pufferfish(832, 80),
            // new Pufferfish(2000, 360),
            // new Pufferfish(1872, 150),
            // new Pufferfish(1464, 220),
            // new Pufferfish(900, 380),
            // new PufferfishRose(1200, 320),
            // new PufferfishRose(1600, 112),
            // new PufferfishRose(664, 288),
            new Jellyfish(),
            new Jellyfish(),
            new Jellyfish(),
            new JellyfishPink(1400),
            // new JellyfishPink(2800),
            new JellyfishPink(2900),
            new Endboss()
        ],

        /**
         * Water wave background objects for the level.
         * @type {Array.<BackgroundObject>}
         */
        [
            new Wave('img/3.Background/Layers/5. Water/D2.png', -719 * 3),
            new Wave('img/3.Background/Layers/5. Water/D1.png', -719 * 2),
            new Wave('img/3.Background/Layers/5. Water/D2.png', -720),
            new Wave('img/3.Background/Layers/5. Water/D1.png', 0),
            new Wave('img/3.Background/Layers/5. Water/D2.png', 720),
            new Wave('img/3.Background/Layers/5. Water/D1.png', 719 * 2),
            new Wave('img/3.Background/Layers/5. Water/D2.png', 719 * 3),
            new Wave('img/3.Background/Layers/5. Water/D1.png', 719 * 4),
            new Wave('img/3.Background/Layers/5. Water/D2.png', 719 * 5)
        ],

        /**
         * Background objects for different layers (floor and scenery).
         * @type {Array.<BackgroundObject>}
         */
        [
            new BackgroundObject('img/3.Background/Layers/4.Fondo 2/D2.png', 719 * -3),
            new BackgroundObject('img/3.Background/Layers/3.Fondo 1/D2.png', 719 * -3),
            new BackgroundObject('img/3.Background/Layers/2. Floor/D2.png', 719 * -3),

            new BackgroundObject('img/3.Background/Layers/4.Fondo 2/D1.png', 719 * -2),
            new BackgroundObject('img/3.Background/Layers/3.Fondo 1/D1.png', 719 * -2),
            new BackgroundObject('img/3.Background/Layers/2. Floor/D1.png', 719 * -2),
            new BackgroundObject('img/3.Background/Layers/4.Fondo 2/D2.png', 719 * -1),
            new BackgroundObject('img/3.Background/Layers/3.Fondo 1/D2.png', 719 * -1),
            new BackgroundObject('img/3.Background/Layers/2. Floor/D2.png', 719 * -1),

            new BackgroundObject('img/3.Background/Layers/4.Fondo 2/D1.png', 0),
            new BackgroundObject('img/3.Background/Layers/3.Fondo 1/D1.png', 0),
            new BackgroundObject('img/3.Background/Layers/2. Floor/D1.png', 0),
            new BackgroundObject('img/3.Background/Layers/4.Fondo 2/D2.png', 719),
            new BackgroundObject('img/3.Background/Layers/3.Fondo 1/D2.png', 719),
            new BackgroundObject('img/3.Background/Layers/2. Floor/D2.png', 719),

            new BackgroundObject('img/3.Background/Layers/4.Fondo 2/D1.png', 719 * 2),
            new BackgroundObject('img/3.Background/Layers/3.Fondo 1/D1.png', 719 * 2),
            new BackgroundObject('img/3.Background/Layers/2. Floor/D1.png', 719 * 2),
            new BackgroundObject('img/3.Background/Layers/4.Fondo 2/D2.png', 719 * 3),
            new BackgroundObject('img/3.Background/Layers/3.Fondo 1/D2.png', 719 * 3),
            new BackgroundObject('img/3.Background/Layers/2. Floor/D2.png', 719 * 3),

            new BackgroundObject('img/3.Background/Layers/4.Fondo 2/D1.png', 719 * 4),
            new BackgroundObject('img/3.Background/Layers/3.Fondo 1/D1.png', 719 * 4),
            new BackgroundObject('img/3.Background/Layers/2. Floor/D1.png', 719 * 4),
            new BackgroundObject('img/3.Background/Layers/4.Fondo 2/D2.png', 719 * 5),
            new BackgroundObject('img/3.Background/Layers/3.Fondo 1/D2.png', 719 * 5),
            new BackgroundObject('img/3.Background/Layers/2. Floor/D2.png', 719 * 5),
        ],

        /**
         * Sunbeams present in the background.
         * @type {Array.<Sunbeam>}
         */
        [
            new Sunbeam('img/3.Background/Layers/1. Light/1.png', -360),
            new Sunbeam('img/3.Background/Layers/1. Light/2.png', 360)
        ],

        /**
         * Coins and animated coins to be collected in the level.
         * @type {Array.<Coin>}
         */
        [
            new AnimatedCoin(),
            new Coin(),
            new AnimatedCoin(),
            new Coin(),
            new AnimatedCoin(),
            new Coin(),
            new AnimatedCoin()
        ],

        /**
         * Poison and animated poison items to be collected in the level.
         * @type {Array.<Poison>}
         */
        [
            new AnimatedPoison(),
            new Poison(),
            new AnimatedPoison(),
            new Poison(),
            new AnimatedPoison(),
            new Poison(),
            new AnimatedPoison()
        ]
    );
}