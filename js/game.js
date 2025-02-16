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
            break;
        case "ArrowRight":
            keyboard.RIGHT = true;
            break;
        case "Enter":
            keyboard.THROW = true;
            break;
        case "Space":
            keyboard.SPACE = true;
            break;
        default:
            return;
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
            break;
        case "ArrowRight":
            keyboard.RIGHT = false;
            break;
        case "Enter":
            keyboard.THROW = false;
            break;
        case "Space":
            keyboard.SPACE = false;
            break;
        default:
            return;
    }
});