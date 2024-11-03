/*
    The class representing the player.

    Implements move() and draw().
*/
class Player {
    constructor(id, name, x, y, size, speed, color) {
        this.id = id;
        this.name = name;
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.color = color;
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
        const DIAGONAL_SPEED_MODIFIER = 1.41;

        switch (dir) {
            case null:
                // When the player stops moving, align to the
                // nearest integer grid location. This helps
                // retain a crisp look when not moving.
                this.x = Math.round(this.x);
                this.y = Math.round(this.y);
                break;
            case "N":
                this.y = this.y - this.speed;
                break;
            case "NE":
                this.x = this.x + (this.speed / DIAGONAL_SPEED_MODIFIER);
                this.y = this.y - (this.speed / DIAGONAL_SPEED_MODIFIER);
                break;
            case "E":
                this.x = this.x + this.speed;
                break;
            case "SE":
                this.x = this.x + (this.speed / DIAGONAL_SPEED_MODIFIER);
                this.y = this.y + (this.speed / DIAGONAL_SPEED_MODIFIER);
                break;
            case "S":
                this.y = this.y = this.y + this.speed;
                break;
            case "SW":
                this.x = this.x - (this.speed / DIAGONAL_SPEED_MODIFIER);
                this.y = this.y + (this.speed / DIAGONAL_SPEED_MODIFIER);
                break;
            case "W":
                this.x = this.x - this.speed;
                break;
            case "NW":
                this.x = this.x - (this.speed / DIAGONAL_SPEED_MODIFIER);
                this.y = this.y - (this.speed / DIAGONAL_SPEED_MODIFIER);
                break;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size, this.size);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

export { Player };
