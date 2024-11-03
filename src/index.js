import { InputHandler } from './modules/input-handler.js'
import { Map } from './modules/map.js'
import { Player } from './modules/player.js'
import { Wall } from './modules/wall.js'

// ----- START -----
let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
let inputHandler = new InputHandler();
let player = new Player(0, "player", 0, 0, 20, 1, "red");
let map = new Map(0, "TestMap");

setup();
gameLoop();
// -----------------

function setup() {
    // Set canvas size
    canvas.width = 700;
    canvas.height = 400;

    // Add event listeners for input
    window.addEventListener("keydown", function (event) {
        inputHandler.keyDown(event.code);
    });
    window.addEventListener("keyup", function (event) {
        inputHandler.keyUp(event.code);
    });

    // Add player to map
    map.spawn(player);

    // Spawn some walls
    map.spawn(new Wall(0, "wall", 20, 20, 20, "black"));
}

function gameLoop() {
    // Clear the screen
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Move the player
    player.move(inputHandler.getDirectionFromKeys());

    // Map calls entity draw() functions
    map.drawAll(ctx);

    // Call gameLoop()
    requestAnimationFrame(gameLoop);
}
