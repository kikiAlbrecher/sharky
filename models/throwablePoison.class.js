/**
 * Represents a throwable poison bubble that inherits from ThrowableBubble.
 * The poison bubble moves in a specific trajectory, with a different behavior than the regular bubble.
 * 
 * @extends ThrowableBubble
 */
class ThrowablePoison extends ThrowableBubble {
    speedY = 2;
    accelerationX = 0.01;

    /**
     * Creates an instance of a ThrowablePoison object.
     * 
     * @param {number} x The X-coordinate where the poison bubble should spawn.
     * @param {number} y The Y-coordinate where the poison bubble should spawn.
     * @param {boolean} otherDirection A flag indicating whether the poison bubble should move in the opposite direction.
     */
    constructor(x, y, otherDirection) {
        super().loadImg('img/1.Sharkie/4.Attack/Bubble trap/Poisoned Bubble (for whale).png');
        this.x = x;
        this.y = y;

        if (otherDirection) {
            this.speed = -this.speed;
            this.accelerationX = Math.abs(this.accelerationX);
        }
    }
}