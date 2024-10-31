/*
    The class representing the player.

    Implements move() and draw().
*/
class Player {
    constructor(x, y, speed, color, size) {
        this.name = "player";
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.color = color;
        this.size = size;
    }

    /*
        `dir` represents the direction to move the player.
        Strings representing Cardinal & Ordinal Directions
        should be passed in for the 'dir' parameter.

        NW  N  NE
          \ | /
        W --|-- E
          / | \
        SW  S  SE
    */
    move(dir) {
        switch (dir) {
            case null:
                this.x = Math.floor(this.x);
                this.y = Math.floor(this.y);
                break;
            case "N":
                this.y = this.y - this.speed;
                break;
            case "NE":
                this.x = this.x + (this.speed / 1.5);
                this.y = this.y - (this.speed / 1.5);
                break;
            case "E":
                this.x = this.x + this.speed;
                break;
            case "SE":
                this.x = this.x + (this.speed / 1.5);
                this.y = this.y + (this.speed / 1.5);
                break;
            case "S":
                this.y = this.y = this.y + this.speed;
                break;
            case "SW":
                this.x = this.x - (this.speed / 1.5);
                this.y = this.y + (this.speed / 1.5);
                break;
            case "W":
                this.x = this.x - this.speed;
                break;
            case "NW":
                this.x = this.x - (this.speed / 1.5);
                this.y = this.y - (this.speed / 1.5);
                break;
        }
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

export { Player };
