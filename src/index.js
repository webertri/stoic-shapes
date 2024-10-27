const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

drawRectangle(20, 20, 20, 20, "blue");

function drawRectangle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(
        Math.round(x),
        Math.round(y),
        Math.round(width),
        Math.round(height)
    );
}
