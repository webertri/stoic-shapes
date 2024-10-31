/*
    The class representing a wall.

    Implements draw().
*/
class Wall {
    constructor(x, y, color, size) {
        this.name = "wall";
        this.x = x;
        this.y = y;
        this.color = color;
        this.size = size;
    }

    /*
        `ctx` is the canvas 2d context to draw to.
    */
    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

export { Wall };
