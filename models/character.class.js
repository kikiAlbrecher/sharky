class Character extends MovableObject {
    speed = 8;
    IMAGES_SWIMMING = [
        '../img/1.Sharkie/3.Swim/1.png',
        '../img/1.Sharkie/3.Swim/2.png',
        '../img/1.Sharkie/3.Swim/3.png',
        '../img/1.Sharkie/3.Swim/4.png',
        '../img/1.Sharkie/3.Swim/5.png',
        '../img/1.Sharkie/3.Swim/6.png'
    ];

    constructor() {
        super().loadImg('../img/1.Sharkie/1.IDLE/1.png');
        this.loadImages(this.IMAGES_SWIMMING);
        this.animateSwimming();
    }

    animateSwimming() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIMMING.length;
            let path = this.IMAGES_SWIMMING[i];
            this.img = this.imgCache[path];
            this.currentImage++;
            // this.x += this.speed;
        }, 1000 / 10);
    }

    jump() {

    }

}