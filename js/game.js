let world;
let canvas;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('My character is', world.character);
}

window.addEventListener('keydown', (event) => {
    if (event.defaultPrevented) {
        return;
    }
    switch (event.code) {
        case "ArrowDown":
            keyboard.DOWN = true;
            break;
        case "ArrowUp":
            keyboard.UP = true;
            break;
        case "ArrowLeft":
            keyboard.LEFT = true;
            // this.moveLeft();
            break;
        case "ArrowRight":
            keyboard.RIGHT = true;
            // this.moveRight;
            break;
        case "Enter":
            // Do something for "enter" or "return" key press.
            break;
        case "Space":
            keyboard.SPACE = true;
            // Do something for "space" key press.
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
});

window.addEventListener('keyup', (event) => {
    if (event.defaultPrevented) {
        return;
    }
    switch (event.code) {
        case "ArrowDown":
            keyboard.DOWN = false;
            break;
        case "ArrowUp":
            keyboard.UP = false;
            break;
        case "ArrowLeft":
            keyboard.LEFT = false;
            // this.moveLeft();
            break;
        case "ArrowRight":
            keyboard.RIGHT = false;
            // this.moveRight;
            break;
        case "Enter":
            // Do something for "enter" or "return" key press.
            break;
        case "Space":
            keyboard.SPACE = false;
            // Do something for "space" key press.
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }
});