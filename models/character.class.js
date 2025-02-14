class Character extends MovableObject {
    y = 0;
    width = 280;
    height = 280;
    speed = 16;

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

    IMAGES_HURT_POISONED = [
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

    IMAGES_DEAD_POISONED = [
        '../img/1.Sharkie/6.Dead/1.Poisoned/1.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/2.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/3.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/4.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/5.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/6.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/7.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/8.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/9.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/10.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/11.png',
        '../img/1.Sharkie/6.Dead/1.Poisoned/12.png'
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

    constructor() {
        super().loadImg(this.IMAGES_IDLE[0]);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_SWIMMING);
        this.applyGravity();
        this.animateSwimming();
    }

    animateSwimming() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT && this.x > -1420) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x;
        }, 1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_SWIMMING);
            }
        }, 1000 / 20);
    }

    isAboveGround() {
        return this.y < 220;
    }

}