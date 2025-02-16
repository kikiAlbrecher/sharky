const level1 = new Level(
    [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new PufferfishRose(),
        new PufferfishRose(),
        new PufferfishRose(),
        new Jellyfish(),
        new Jellyfish(),
        new Jellyfish(),
        new Endboss()
    ],
    [
        new Wave('../img/3.Background/Layers/5. Water/D1.png', 0),
        new Wave('../img/3.Background/Layers/5. Water/D2.png', 715)
    ],
    [
        new BackgroundObject('../img/3.Background/Layers/4.Fondo 2/D1.png', 719 * -2),
        new BackgroundObject('../img/3.Background/Layers/3.Fondo 1/D1.png', 719 * -2),
        new BackgroundObject('../img/3.Background/Layers/2. Floor/D1.png', 719 * -2),
        // new BackgroundObject('../img/3.Background/Layers/1. Light/1.png', 719 * -2),
        new BackgroundObject('../img/3.Background/Layers/4.Fondo 2/D2.png', 719 * -1),
        new BackgroundObject('../img/3.Background/Layers/3.Fondo 1/D2.png', 719 * -1),
        new BackgroundObject('../img/3.Background/Layers/2. Floor/D2.png', 719 * -1),
        // new BackgroundObject('../img/3.Background/Layers/1. Light/2.png', 719 * -1)

        new BackgroundObject('../img/3.Background/Layers/4.Fondo 2/D1.png', 0),
        new BackgroundObject('../img/3.Background/Layers/3.Fondo 1/D1.png', 0),
        new BackgroundObject('../img/3.Background/Layers/2. Floor/D1.png', 0),
        // new BackgroundObject('../img/3.Background/Layers/1. Light/1.png', 0),
        new BackgroundObject('../img/3.Background/Layers/4.Fondo 2/D2.png', 719),
        new BackgroundObject('../img/3.Background/Layers/3.Fondo 1/D2.png', 719),
        new BackgroundObject('../img/3.Background/Layers/2. Floor/D2.png', 719),
        // new BackgroundObject('../img/3.Background/Layers/1. Light/2.png', 719)

        new BackgroundObject('../img/3.Background/Layers/4.Fondo 2/D1.png', 719 * 2),
        new BackgroundObject('../img/3.Background/Layers/3.Fondo 1/D1.png', 719 * 2),
        new BackgroundObject('../img/3.Background/Layers/2. Floor/D1.png', 719 * 2),
        // new BackgroundObject('../img/3.Background/Layers/1. Light/1.png', 719 * 2),
        new BackgroundObject('../img/3.Background/Layers/4.Fondo 2/D2.png', 719 * 3),
        new BackgroundObject('../img/3.Background/Layers/3.Fondo 1/D2.png', 719 * 3),
        new BackgroundObject('../img/3.Background/Layers/2. Floor/D2.png', 719 * 3),
        // new BackgroundObject('../img/3.Background/Layers/1. Light/2.png', 719 * 3)
    ],
    [
        new Sunbeam('../img/3.Background/Layers/1. Light/1.png', -360),
        new Sunbeam('../img/3.Background/Layers/1. Light/2.png', 360)
    ],
    [
        new Poison(),
        new Poison(),
        new Poison(),
        new Coin(),
        new Coin(),
        new Coin(),
    ]
);