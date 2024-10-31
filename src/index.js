import { InputHandler } from './modules/input-handler.js'
import { Player } from './modules/player.js'
import { Wall } from './modules/wall.js'

// ----- GLOBAL VARS -----

// main
let canvas = document.getElementById("game");
let ctx = canvas.getContext("2d");
let inputHandler = new InputHandler();

// map
let walls = [];
let player = new Player(0, 0, 1, "red", 20);

let inputText = document.getElementById("input");

// ----- GAME FUNCTIONS -----

function setup() {
    // Set canvas size
    canvas.width = 700;
    canvas.height = 400;

    // Add event listeners
    window.addEventListener("keydown", function (event) {
        inputHandler.keyDown(event.code);
    });
    window.addEventListener("keyup", function (event) {
        inputHandler.keyUp(event.code);
    });

    // Example walls
    walls.push(new Wall (20, 20, "black", 20));
    walls.push(new Wall (40, 20, "black", 20));
    walls.push(new Wall (60, 40, "black", 20));
}

function gameLoop() {
    // Clear the screen
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Draw the walls
    walls.forEach(function (wall) {
        wall.draw(ctx);
    });

    // Move the player
    let dir = inputHandler.getDirectionFromKeys();
    player.move(dir);

    // Draw the player
    player.draw(ctx);

    // Show current dir based on key presses
    inputText.innerHTML = dir;

    // Call gameLoop()
    requestAnimationFrame(gameLoop);
}

// ----- START -----

setup();
gameLoop();
