/**
 * Character class that extends MovableObject to represent the protagonist with various properties 
 * and behaviors, such as idle time, coin amount, poison amount, and different animations for 
 * actions like swimming, attacking, and dying.
 * 
 * @extends MovableObject
 */
class Character extends MovableObject {
    x = 0;
    width = 280;
    height = 280;
    speed = 12;
    idleTime = 0;
    coinAmount = 0;
    coinDelta = 20;
    poisonAmount = 0;
    poisonDelta = 20;
    bubblesAmount = 0;
    bubblesDelta = 10;
    isSharkyHurt = false;
    playDead = false;
    offset = {
        top: 132,
        right: 56,
        bottom: 60,
        left: 56
    };

    IMAGES_IDLE = [
        'img/1.Sharkie/1.IDLE/1.png',
        'img/1.Sharkie/1.IDLE/2.png',
        'img/1.Sharkie/1.IDLE/3.png',
        'img/1.Sharkie/1.IDLE/4.png',
        'img/1.Sharkie/1.IDLE/5.png',
        'img/1.Sharkie/1.IDLE/6.png',
        'img/1.Sharkie/1.IDLE/7.png',
        'img/1.Sharkie/1.IDLE/8.png',
        'img/1.Sharkie/1.IDLE/9.png',
        'img/1.Sharkie/1.IDLE/10.png',
        'img/1.Sharkie/1.IDLE/11.png',
        'img/1.Sharkie/1.IDLE/12.png',
        'img/1.Sharkie/1.IDLE/13.png',
        'img/1.Sharkie/1.IDLE/14.png',
        'img/1.Sharkie/1.IDLE/15.png',
        'img/1.Sharkie/1.IDLE/16.png',
        'img/1.Sharkie/1.IDLE/17.png',
        'img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_LONG_IDLE = [
        'img/1.Sharkie/2.Long_IDLE/i1.png',
        'img/1.Sharkie/2.Long_IDLE/I2.png',
        'img/1.Sharkie/2.Long_IDLE/I3.png',
        'img/1.Sharkie/2.Long_IDLE/I4.png',
        'img/1.Sharkie/2.Long_IDLE/I5.png',
        'img/1.Sharkie/2.Long_IDLE/I6.png',
        'img/1.Sharkie/2.Long_IDLE/I7.png',
        'img/1.Sharkie/2.Long_IDLE/I8.png',
        'img/1.Sharkie/2.Long_IDLE/I9.png',
        'img/1.Sharkie/2.Long_IDLE/I10.png',
        'img/1.Sharkie/2.Long_IDLE/I11.png',
        'img/1.Sharkie/2.Long_IDLE/I12.png',
        'img/1.Sharkie/2.Long_IDLE/I13.png',
        'img/1.Sharkie/2.Long_IDLE/I14.png'
    ];

    IMAGES_SWIMMING = [
        'img/1.Sharkie/3.Swim/1.png',
        'img/1.Sharkie/3.Swim/2.png',
        'img/1.Sharkie/3.Swim/3.png',
        'img/1.Sharkie/3.Swim/4.png',
        'img/1.Sharkie/3.Swim/5.png',
        'img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_ATTACK_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];

    IMAGES_ATTACK_EMPTY_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/7.png'
    ];

    IMAGES_ATTACK_POISONED_BUBBLE = [
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        'img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];

    IMAGES_ATTACK_FIN = [
        'img/1.Sharkie/4.Attack/Fin slap/1.png',
        'img/1.Sharkie/4.Attack/Fin slap/4.png',
        'img/1.Sharkie/4.Attack/Fin slap/5.png',
        'img/1.Sharkie/4.Attack/Fin slap/6.png',
        'img/1.Sharkie/4.Attack/Fin slap/7.png',
        'img/1.Sharkie/4.Attack/Fin slap/8.png'
    ];

    IMAGES_HURT_POISON = [
        'img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        'img/1.Sharkie/5.Hurt/1.Poisoned/4.png'
    ];

    IMAGES_DEAD = [
        'img/1.Sharkie/6.Dead/1.Poisoned/1.png',
        'img/1.Sharkie/6.Dead/1.Poisoned/2.png',
        'img/1.Sharkie/6.Dead/1.Poisoned/3.png',
        'img/1.Sharkie/6.Dead/1.Poisoned/4.png',
        'img/1.Sharkie/6.Dead/1.Poisoned/5.png',
        'img/1.Sharkie/6.Dead/1.Poisoned/6.png',
        'img/1.Sharkie/6.Dead/1.Poisoned/7.png',
        'img/1.Sharkie/6.Dead/1.Poisoned/8.png',
        'img/1.Sharkie/6.Dead/1.Poisoned/9.png',
    ];

    IMAGES_DEAD_END = [
        'img/1.Sharkie/6.Dead/1.Poisoned/9.png',
    ];

    world;

    /**
     * Constructs a new Character object, loading all necessary images and applying gravity.
     */
    constructor() {
        super().loadImg(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_SWIMMING);
        this.loadImages(this.IMAGES_ATTACK_BUBBLE);
        this.loadImages(this.IMAGES_ATTACK_EMPTY_BUBBLE);
        this.loadImages(this.IMAGES_ATTACK_POISONED_BUBBLE);
        this.loadImages(this.IMAGES_ATTACK_FIN);
        this.loadImages(this.IMAGES_HURT_POISON);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_DEAD_END);
        this.applyGravity();
        this.animateCharacter();
    }

    /**
     * Checks if the character is above ground (used for checking if the character can move down).
     *
     * @returns {boolean} True if the character is above ground.
     */
    isAboveGround() {
        if (this instanceof ThrowableBubble) return true;
        else return this.y <= 220;
    }

    /**
     * Starts the animation intervals for the character's movements and animations.
     */
    animateCharacter() {
        setStoppableInterval(() => this.moveCharacter(), 1000 / 60);
        setStoppableInterval(() => this.playAnimationMoveCharacter(), 1000 / 5);
    }

    /**
     * Handles the movements of the character based on keyboard input.
     */
    moveCharacter() {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) this.moveRight();
        else if (this.world.keyboard.LEFT && this.x > -1420) {
            this.moveLeft();
            this.otherDirection = true;
        } else if (this.world.keyboard.UP && this.y > -110) this.moveUp();
        else if (this.world.keyboard.DOWN && this.isAboveGround()) this.moveDown();
        this.world.camera_x = -this.x + 80;
    }

    /**
     * Plays the corresponding animation for the character based on keyboard input.
     */
    playAnimationMoveCharacter() {
        if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) && !this.isDead())
            this.sharkySwims();
        else if (this.world.keyboard.THROW && !this.isDead()) this.sharkyThrowsBubble();
        else if (this.world.keyboard.THROW_POISON && !this.isDead()) this.sharkyThrowsPoison();
        else if (this.world.keyboard.SPACE && !this.isDead()) this.sharkySlapsWithTailfin();
        else if (this.x > 2400 && !this.isDead()) this.sharkyEncounterEndboss();
        else if (this.isHurtPoison() && !this.isDead()) this.sharkyFeelsPain();
        else if (this.isDead() && !this.playDead) this.sharkyDies();
        else if (this.isDead() && this.playDead) this.sharkyIsDead();
        else if (!this.isDead()) this.sharkyDoesNothing();
    }

    /**
     * Plays the swimming animation when the character is swimming.
     */
    sharkySwims() {
        this.idleTime = 0;
        this.playAnimation(this.IMAGES_SWIMMING);
        snore.pause();
    }

    /**
     * Handles throwing bubbles when the THROW key is pressed, and plays the corresponding animation.
     */
    sharkyThrowsBubble() {
        this.idleTime = 0;
        if (this.coinAmount > 0 && !this.isDead()) {
            throwingBubbles.play();
            this.playAnimation(this.IMAGES_ATTACK_BUBBLE);
        } else if (this.coinAmount === 0 && !this.isDead()) this.throwBubbleEmpty();
    }

    /**
     * Plays the animation for throwing an empty bubble when the character has no bubbles or poison left.
     */
    throwBubbleEmpty() {
        throwingBubbles.play();
        this.playAnimation(this.IMAGES_ATTACK_EMPTY_BUBBLE);
    }

    /**
     * Handles throwing poisoned bubbles when the THROW_POISON key is pressed and there are poison bubbles available.
     */
    sharkyThrowsPoison() {
        this.idleTime = 0;
        if (this.poisonAmount > 0 && !this.isDead()) {
            throwingBubbles.play();
            this.playAnimation(this.IMAGES_ATTACK_POISONED_BUBBLE);
        } else if (this.coinAmount === 0 && !this.isDead()) this.throwBubbleEmpty();
    }

    /**
    * Makes the character perform a tailfin slap.
    * Pauses the 'snore' sound, plays the 'slap' sound, and displays the tailfin slap animation.
    * After 160ms the character can perform his next tailfin slap.
    */
    sharkySlapsWithTailfin() {
        this.idleTime = 0;

        snore.pause();
        this.isSlapping = true;
        slap.play();
        this.playAnimation(this.IMAGES_ATTACK_FIN);
        setTimeout(() => this.isSlapping = false, 160);
    }

    /**
     * Triggers the encounter with the end boss by playing the appropriate sounds.
     * Pauses the 'backgroundHappy' sound and starts the 'endbossFight' sound.
     * Reduces the background volume while the endboss fight sound is playing.
     */
    sharkyEncounterEndboss() {
        backgroundHappy.pause();
        endbossFight.play();
        if (endbossFight.play()) backgroundHappy.volume = 0;
    }

    /**
     * Makes the character experience pain (from poison).
     * Plays the 'hurt' animation and the 'pain' sound.
     * The character will stop feeling hurt after 160ms.
     */
    sharkyFeelsPain() {
        this.isSharkyHurt = true;
        this.idleTime = 0;

        this.playAnimation(this.IMAGES_HURT_POISON);
        pain.play();
        setTimeout(() => this.isSharkyHurt = false, 160);
    }

    /**
     * Makes the character die.
     * Plays the 'dead' animation, and triggers the 'game over' state after a delay of 1600ms.
     */
    sharkyDies() {
        this.isSharkyHurt = false;
        this.playAnimation(this.IMAGES_DEAD);

        setTimeout(() => this.playDead = true, 1600);
    }

    /**
     * Handles the character's death and initiates the end game sequence.
     * Plays the final 'dead' animation and moves the character upward.
     * After 2800ms, it shows the game over screen.
     */
    sharkyIsDead() {
        let timeSpent = 0;

        this.startGameOverSound();
        let moveUpInterval = setInterval(() => {
            if (timeSpent < 2800) {
                this.playAnimation(this.IMAGES_DEAD_END);
                this.y -= 8;
                timeSpent += 100;
            } else if (timeSpent >= 2800) {
                clearInterval(moveUpInterval);
                this.showGameOver();
            }
        }, 1000 / 16);
        clearAllIntervals();
    }

    /**
     * Starts the 'game over' sound after stopping all other sounds.
     * Waits for 300ms before playing the 'gameOver' sound.
     */
    startGameOverSound() {
        stopAllAudios()
            .then(() => {
                setTimeout(() => gameOver.play(), 300);
            })
            .catch((e) => {
                if (e) gameOver.pause();
            });
    }

    /**
     * Displays the game over screen and plays the 'gameEnd' sound.
     */
    showGameOver() {
        this.displayGameOver();
        gameEnd.play();
    }

    /**
     * Makes the character do nothing (idle state).
     * Plays the 'idle' animation and the 'backgroundHappy' sound.
     * After 2500ms, the character will switch to the 'long idle' animation and play the 'snore' sound.
     */
    sharkyDoesNothing() {
        this.idleTime += 1000 / 12;

        this.playAnimation(this.IMAGES_IDLE);
        snore.pause();
        backgroundHappy.play();
        if (this.idleTime >= 2500) {
            this.playAnimation(this.IMAGES_LONG_IDLE);
            snore.play();
        }
    }

    /**
     * Collects coins. The coin amount will increase by a fixed delta up to a maximum of 100.
     * Plays the 'collectedCoin' sound and calls the collectBubbles method.
     */
    collectCoins() {
        if (this.coinAmount < 100) {
            this.coinAmount += this.coinDelta;
            collectedCoin.play();
            this.collectBubbles();
        }
    }

    /**
     * Collects poison. The poison amount will increase by a fixed delta up to a maximum of 100.
     * Plays the 'collectedPoison' sound and calls the collectBubbles method.
     */
    collectPoison() {
        if (this.poisonAmount < 100) {
            this.poisonAmount += this.poisonDelta;
            collectedPoison.play();
            this.collectBubbles();
        }
    }

    /**
     * Collects bubbles. The bubbles amount will increase by a fixed delta up to a maximum of 100.
     */
    collectBubbles() {
        if (this.bubblesAmount < 100) this.bubblesAmount += this.bubblesDelta;
    }

    /**
     * Displays the 'game over' screen by removing the 'noGameScreen' and showing the 'gameOverScreen' element.
     */
    displayGameOver() {
        const gameOver = document.getElementById('gameOverScreen');

        noGameScreen();
        gameOver.classList.remove('d-none');
    }
}