/*
    The class representing an area,
    used as the start or end area.

    Options for areaType: "start", "end"

    Implements draw().
*/
class Area {
    constructor(areaType, x, y, color, size) {
        this.name = "area";
        this.areaType = areaType;
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

export { Block };
