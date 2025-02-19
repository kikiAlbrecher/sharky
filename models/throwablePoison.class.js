class ThrowablePoison extends ThrowableBubble {
    speedY = 2;
    accelerationX = 0.01;

    constructor(x, y, otherDirection) {
        super().loadImg('../img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;

        if (otherDirection) {
            this.speed = -this.speed;
            this.accelerationX = Math.abs(this.accelerationX);
        }
    }
}