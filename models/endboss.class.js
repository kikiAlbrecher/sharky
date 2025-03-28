/**
 * Represents the Endboss in the game, the main - strongest - antagonist of Sharky.
 * Handles animations, attacks, movement, and death sequences for the Endboss.
 * 
 * @extends MovableObject
 */
class Endboss extends MovableObject {
    x = 2860 + 200;
    y = 40;
    width = 400;
    height = 400;
    speed = 24;
    energyReduction = 20;

    offset = {
        top: 192,
        right: 30,
        bottom: 74,
        left: 26
    };

    /**
     * Images representing the different stages / moves of the Endboss.
     */
    IMAGES_INTRODUCING = [
        'img/2.Enemy/3 Final-enemy/1.Introduce/1.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/2.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/3.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/4.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/5.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/6.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/7.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/8.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/9.png',
        'img/2.Enemy/3 Final-enemy/1.Introduce/10.png'
    ];

    IMAGES_SWIMMING = [
        'img/2.Enemy/3 Final-enemy/2.floating/1.png',
        'img/2.Enemy/3 Final-enemy/2.floating/2.png',
        'img/2.Enemy/3 Final-enemy/2.floating/3.png',
        'img/2.Enemy/3 Final-enemy/2.floating/4.png',
        'img/2.Enemy/3 Final-enemy/2.floating/5.png',
        'img/2.Enemy/3 Final-enemy/2.floating/6.png',
        'img/2.Enemy/3 Final-enemy/2.floating/7.png',
        'img/2.Enemy/3 Final-enemy/2.floating/8.png',
        'img/2.Enemy/3 Final-enemy/2.floating/9.png',
        'img/2.Enemy/3 Final-enemy/2.floating/10.png',
        'img/2.Enemy/3 Final-enemy/2.floating/11.png',
        'img/2.Enemy/3 Final-enemy/2.floating/12.png',
        'img/2.Enemy/3 Final-enemy/2.floating/13.png'
    ];

    IMAGES_ATTACKING = [
        'img/2.Enemy/3 Final-enemy/Attack/1.png',
        'img/2.Enemy/3 Final-enemy/Attack/2.png',
        'img/2.Enemy/3 Final-enemy/Attack/3.png',
        'img/2.Enemy/3 Final-enemy/Attack/4.png',
        'img/2.Enemy/3 Final-enemy/Attack/5.png',
        'img/2.Enemy/3 Final-enemy/Attack/6.png'
    ];

    IMAGES_HURT = [
        'img/2.Enemy/3 Final-enemy/Hurt/1.png',
        'img/2.Enemy/3 Final-enemy/Hurt/2.png',
        'img/2.Enemy/3 Final-enemy/Hurt/3.png',
        'img/2.Enemy/3 Final-enemy/Hurt/4.png'
    ];

    IMAGES_DEAD = [
        'img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 6.png',
        'img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 7.png',
        'img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 8.png',
        'img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 9.png',
        'img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    IMAGES_DEAD_END = [
        'img/2.Enemy/3 Final-enemy/Dead/Mesa de trabajo 2 copia 10.png'
    ];

    /**
     * Creates an instance of Endboss.
     * Loads images for all the different states / movements (introducing, swimming, attacking, hurt, dead) of this antagonist.
     */
    constructor() {
        super();
        this.loadImg(this.IMAGES_INTRODUCING[0]);
        this.loadImages(this.IMAGES_INTRODUCING);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_ATTACKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImg(this.IMAGES_DEAD_END);
    }

    /**
     * Plays the animation for the introduction of the Endboss.
     */
    playImagesIntroducing() {
        this.playAnimation(this.IMAGES_INTRODUCING);
    }

    /**
     * Plays the animation for the Endboss swimming.
     */
    playImagesSwimming() {
        this.playAnimation(this.IMAGES_SWIMMING);
    }

    /**
     * Plays the animation for when the Endboss is hurt.
     */
    playImagesHurt() {
        this.playAnimation(this.IMAGES_HURT);
        endbossPain.play();
    }

    /**
     * Plays the animation for the Endboss dead state.
     */
    playImagesDead() {
        this.playAnimation(this.IMAGES_DEAD);
    }

    /**
     * Lifts the Endboss upwards (used when it is dead).
     */
    liftUpEndboss() {
        this.playAnimation(this.IMAGES_DEAD_END);
        this.y -= 5;
    }

    /**
     * Stops any currently playing audios and plays the winning audio after a short delay.
     */
    stopPlayStartWinAudios() {
        stopAllAudios()
            .then(() => {
                setTimeout(() => win.play(), 300);
            })
            .catch((e) => {
                if (e) win.pause();
            });
    }

    /**
     * Displays the win screen and plays the game end audio.
     */
    showWin() {
        win.pause();
        this.displayWinScreen();
        gameEnd.play();
    }

    /**
     * Displays the win message and hides the game screen.
     */
    displayWinScreen() {
        const winMessage = document.getElementById('winScreen');

        noGameScreen();
        winMessage.classList.remove('d-none');
    }
}