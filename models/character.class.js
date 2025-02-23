class Character extends MovableObject {
    width = 280;
    height = 280;
    speed = 16;
    idleTime = 0;
    coinAmount = 0;
    coinDelta = 20;
    poisonAmount = 0;
    poisonDelta = 20;
    bubblesAmount = 0;
    bubblesDelta = 10;
    offset = {
        top: 132,
        right: 56,
        bottom: 40,
        left: 56
    };

    IMAGES_IDLE = [
        '../img/1.Sharkie/1.IDLE/1.png',
        '../img/1.Sharkie/1.IDLE/2.png',
        '../img/1.Sharkie/1.IDLE/3.png',
        '../img/1.Sharkie/1.IDLE/4.png',
        '../img/1.Sharkie/1.IDLE/5.png',
        '../img/1.Sharkie/1.IDLE/6.png',
        '../img/1.Sharkie/1.IDLE/7.png',
        '../img/1.Sharkie/1.IDLE/8.png',
        '../img/1.Sharkie/1.IDLE/9.png',
        '../img/1.Sharkie/1.IDLE/10.png',
        '../img/1.Sharkie/1.IDLE/11.png',
        '../img/1.Sharkie/1.IDLE/12.png',
        '../img/1.Sharkie/1.IDLE/13.png',
        '../img/1.Sharkie/1.IDLE/14.png',
        '../img/1.Sharkie/1.IDLE/15.png',
        '../img/1.Sharkie/1.IDLE/16.png',
        '../img/1.Sharkie/1.IDLE/17.png',
        '../img/1.Sharkie/1.IDLE/18.png'
    ];

    IMAGES_LONG_IDLE = [
        '../img/1.Sharkie/2.Long_IDLE/i1.png',
        '../img/1.Sharkie/2.Long_IDLE/i2.png',
        '../img/1.Sharkie/2.Long_IDLE/i3.png',
        '../img/1.Sharkie/2.Long_IDLE/i4.png',
        '../img/1.Sharkie/2.Long_IDLE/i5.png',
        '../img/1.Sharkie/2.Long_IDLE/i6.png',
        '../img/1.Sharkie/2.Long_IDLE/i7.png',
        '../img/1.Sharkie/2.Long_IDLE/i8.png',
        '../img/1.Sharkie/2.Long_IDLE/i9.png',
        '../img/1.Sharkie/2.Long_IDLE/i10.png',
        '../img/1.Sharkie/2.Long_IDLE/i11.png',
        '../img/1.Sharkie/2.Long_IDLE/i12.png',
        '../img/1.Sharkie/2.Long_IDLE/i13.png',
        '../img/1.Sharkie/2.Long_IDLE/i14.png'
    ];

    IMAGES_SWIMMING = [
        '../img/1.Sharkie/3.Swim/1.png',
        '../img/1.Sharkie/3.Swim/2.png',
        '../img/1.Sharkie/3.Swim/3.png',
        '../img/1.Sharkie/3.Swim/4.png',
        '../img/1.Sharkie/3.Swim/5.png',
        '../img/1.Sharkie/3.Swim/6.png'
    ];

    IMAGES_ATTACK_BUBBLE = [
        '../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/1.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/2.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/3.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/4.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/5.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/6.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/7.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/op1 (with bubble formation)/8.png'
    ];

    IMAGES_ATTACK_EMPTY_BUBBLE = [
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/1.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/2.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/3.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/4.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/5.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/6.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/Whitout bubbles/7.png'
    ];

    IMAGES_ATTACK_POISONED_BUBBLE = [
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/1.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/2.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/3.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/4.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/5.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/6.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/7.png',
        '../img/1.Sharkie/4.Attack/Bubble trap/For Whale/8.png'
    ];

    IMAGES_ATTACK_FIN = [
        '../img/1.Sharkie/4.Attack/Fin slap/1.png',
        // '../img/1.Sharkie/4.Attack/Fin slap/2.png',
        // '../img/1.Sharkie/4.Attack/Fin slap/3.png',
        '../img/1.Sharkie/4.Attack/Fin slap/4.png',
        '../img/1.Sharkie/4.Attack/Fin slap/5.png',
        '../img/1.Sharkie/4.Attack/Fin slap/6.png',
        '../img/1.Sharkie/4.Attack/Fin slap/7.png',
        '../img/1.Sharkie/4.Attack/Fin slap/8.png'
    ];

    IMAGES_HURT_POISON = [
        '../img/1.Sharkie/5.Hurt/1.Poisoned/1.png',
        '../img/1.Sharkie/5.Hurt/1.Poisoned/2.png',
        '../img/1.Sharkie/5.Hurt/1.Poisoned/3.png',
        '../img/1.Sharkie/5.Hurt/1.Poisoned/4.png'
    ];

    IMAGES_HURT_ELECTRIC = [
        '../img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        '../img/1.Sharkie/5.Hurt/2.Electric shock/1.png',
        '../img/1.Sharkie/5.Hurt/2.Electric shock/1.png'
    ];

    IMAGES_DEAD_POISON = [
        '../img/1.Sharkie/6.Dead/1.Poisoned/1.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/2.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/3.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/4.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/5.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/6.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/7.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/8.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/9.png',
        // '../img/1.Sharkie/6.Dead/1.Poisoned/10.png',
        // '../img/1.Sharkie/6.Dead/1.Poisoned/11.png',
        // '../img/1.Sharkie/6.Dead/1.Poisoned/12.png'
    ];

    IMAGES_DEAD_ELECTRIC = [
        '../img/1.Sharkie/6.Dead/2.Electro_shock/1.png',
        '../img/1.Sharkie/6.Dead/2.Electro_shock/2.png',
        '../img/1.Sharkie/6.Dead/2.Electro_shock/3.png',
        '../img/1.Sharkie/6.Dead/2.Electro_shock/4.png',
        '../img/1.Sharkie/6.Dead/2.Electro_shock/5.png',
        '../img/1.Sharkie/6.Dead/2.Electro_shock/6.png',
        '../img/1.Sharkie/6.Dead/2.Electro_shock/7.png',
        '../img/1.Sharkie/6.Dead/2.Electro_shock/8.png',
        '../img/1.Sharkie/6.Dead/2.Electro_shock/9.png',
        '../img/1.Sharkie/6.Dead/2.Electro_shock/10.png'
    ];

    world;
    // swimming_sound = new Audio('audio/swimming.mp3');

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
        this.loadImages(this.IMAGES_HURT_ELECTRIC);
        this.loadImages(this.IMAGES_DEAD_POISON);
        this.loadImages(this.IMAGES_DEAD_ELECTRIC);
        this.applyGravity();
        this.animateCharacter();
    }

    isAboveGround() {
        if (this instanceof ThrowableBubble) {
            return true;
        } else {
            return this.y <= 220;
        }
    }

    animateCharacter() {
        setInterval(() => {
            // this.swimming_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                // this.swimming_sound.play();
            } else if (this.world.keyboard.LEFT && this.x > -1420) {
                this.moveLeft();
                // this.swimming_sound.play();
                this.otherDirection = true;
            } else if (this.world.keyboard.UP && this.y > -110) {
                this.moveUp();
                // this.swimming_sound.play();
            } else if (this.world.keyboard.DOWN && this.isAboveGround()) {
                this.moveDown();
                // this.swimming_sound.play();
            }
            this.world.camera_x = -this.x;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isAboveGround()) {
                if (this.idleTime > 0 && this.idleTime < 2400) {
                    this.playAnimation(this.IMAGES_IDLE);
                    this.idleTime += 1000 / 12;
                } else {
                    this.playAnimation(this.IMAGES_LONG_IDLE);
                }
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_SWIMMING);
            } else if (this.isHurtPoison()) {
                this.playAnimation(this.IMAGES_HURT_POISON);
            }
            // if (this.isHurtElectric) {
            //     this.playAnimation(this.IMAGES_HURT_ELECTRIC);
            // } 
            else if (this.world.keyboard.THROW) {
                if (this.coinAmount > 0 && !this.isDead()) {
                    this.playAnimation(this.IMAGES_ATTACK_BUBBLE);
                } else {
                    this.playAnimation(this.IMAGES_ATTACK_EMPTY_BUBBLE);
                }
            } else if (this.world.keyboard.THROW_POISON) {
                if (this.poisonAmount > 0 && !this.isDead()) {
                    this.playAnimation(this.IMAGES_ATTACK_POISONED_BUBBLE);
                } else {
                    this.playAnimation(this.IMAGES_ATTACK_EMPTY_BUBBLE);
                }
            } 
            if (this.world.keyboard.SPACE) {
                this.isSlapping = true;
                this.playAnimation(this.IMAGES_ATTACK_FIN);
            } else {
                this.isSlapping = false;
            }

                
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD_POISON);
            } else if (this.x > 1900) {
                // this.danger_sound.play();
            }
        }, 1000 / 10);
    }

    collectCoins() {
        if (this.coinAmount == 100) {
            return;
        } else {
            this.coinAmount += this.coinDelta;
            this.collectBubbles();
        }
    }

    collectPoison() {
        if (this.poisonAmount == 100) {
            return;
        } else {
            this.poisonAmount += this.poisonDelta;
            this.collectBubbles();
        }
    }

    collectBubbles() {
        this.bubblesAmount += this.bubblesDelta;
        if (this.bubblesAmount == 100) {
            return;
        } else {
            this.bubblesAmount += this.bubblesDelta;
        }
    }

}