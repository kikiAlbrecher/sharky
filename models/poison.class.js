class Poison extends MovableObject {
    width = 50;
    height = 60;

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
        this.x = 280 + Math.random() * 440;
        this.y = 400 - Math.random() * 560;
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