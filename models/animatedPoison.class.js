/**
 * Class representing a poison object in the game.
 * This class handles the loading and animation of poison images.
 * 
 * @extends MovableObject
 */
class AnimatedPoison extends MovableObject {
    width = 50;
    height = 60;

    offset = {
        top: 28,
        right: 12,
        bottom: 4,
        left: 12
    };

    IMAGES_POISON = [
        'img/4.Marcadores/Posión/Animada/1.png',
        'img/4.Marcadores/Posión/Animada/2.png',
        'img/4.Marcadores/Posión/Animada/3.png',
        'img/4.Marcadores/Posión/Animada/4.png',
        'img/4.Marcadores/Posión/Animada/5.png',
        'img/4.Marcadores/Posión/Animada/6.png',
        'img/4.Marcadores/Posión/Animada/7.png',
        'img/4.Marcadores/Posión/Animada/8.png'
    ];

    /**
     * Creates an instance of the Poison object.
     * It loads the poison images, sets random position values for the poison object,
     * and starts the animation loop.
     */
    constructor() {
        super().loadImg(this.IMAGES_POISON[0]);
        this.loadImages(this.IMAGES_POISON);
        this.x = 280 + Math.random() * 440 * 6;
        this.y = 300 - Math.random() * 260;
        this.animatePoison();
    }

    /**
     * Animates the poison images by cycling through the image array at a set interval.
     * The current image is updated every 1/8th of a second.
     * The animation continues until it is stopped.
     */
    animatePoison() {
        setStoppableInterval(() => {
            let i = this.currentImage % this.IMAGES_POISON.length;
            let path = this.IMAGES_POISON[i];
            this.img = this.imgCache[path];
            this.currentImage++;
        }, 1000 / 8);
    }
}