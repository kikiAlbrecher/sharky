class ThrowableBubble extends MovableObject {
    width = 40;
    height = 40;
    speed = 16;
    speedY = 4;
    accelerationX = -0.16;

    constructor(x, y, otherDirection) {
        super().loadImg('../img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;

        if (otherDirection) {
            this.speed = -this.speed;
            this.accelerationX = Math.abs(this.accelerationX);
        }

        this.throw();
    }

    throw() {
        setInterval(() => {
            this.x += this.speed;
            this.speed += this.accelerationX;
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }, 1000 / 25);
    }


}