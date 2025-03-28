/**
 * Represents a throwable bubble in the game that moves across the screen.
 * The bubble has properties for width, height, speed, and acceleration.
 * It can be thrown in a specific direction and will move based on those properties.
 * 
 * @extends MovableObject
 */
class ThrowableBubble extends MovableObject {
    width = 40;
    height = 40;
    speed = 16;
    speedY = 4;
    accelerationX = -0.16;

    /**
     * Creates an instance of the ThrowableBubble class.
     * The bubble is initialized at a specific position and thrown in a specific direction.
     * 
     * @param {number} x - The initial x-coordinate of the bubble.
     * @param {number} y - The initial y-coordinate of the bubble.
     * @param {boolean} otherDirection - If true, the bubble will move in the opposite direction.
     */
    constructor(x, y, otherDirection) {
        super().loadImg('img/1.Sharkie/4.Attack/Bubble trap/Bubble.png');
        this.x = x;
        this.y = y;

        if (otherDirection) {
            this.speed = -this.speed;
            this.accelerationX = Math.abs(this.accelerationX);
        }

        this.throw();
    }

    /**
     * Starts the movement of the bubble by updating its position over time.
     * The bubble's position is updated using a set interval based on its speed and acceleration.
     * 
     */
    throw() {
        setStoppableInterval(() => {
            this.x += this.speed;
            this.speed += this.accelerationX;
            this.y -= this.speedY;
            this.speedY -= this.acceleration;
        }, 1000 / 25);
    }
}