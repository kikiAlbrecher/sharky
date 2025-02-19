class AnimatedPoison extends MovableObject {
    width = 50;
    height = 60;
    offset = {
        top: 27,
        right: 10,
        bottom: 3,
        left: 10
    };

    IMAGES_POISON = [
        '../img/4.Marcadores/Posión/Animada/1.png',
        '../img/4.Marcadores/Posión/Animada/2.png',
        '../img/4.Marcadores/Posión/Animada/3.png',
        '../img/4.Marcadores/Posión/Animada/4.png',
        '../img/4.Marcadores/Posión/Animada/5.png',
        '../img/4.Marcadores/Posión/Animada/6.png',
        '../img/4.Marcadores/Posión/Animada/7.png',
        '../img/4.Marcadores/Posión/Animada/8.png'
    ];

    constructor() {
        super().loadImg('../img/4.Marcadores/Posión/Animada/1.png');
        this.loadImages(this.IMAGES_POISON);
        this.x = 280 + Math.random() * 440 * 4;
        this.y = 300 - Math.random() * 260;
        this.animatePoison();
    }

    animatePoison() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_POISON.length;
            let path = this.IMAGES_POISON[i];
            this.img = this.imgCache[path];
            this.currentImage++;
        }, 1000 / 8);
    }
}