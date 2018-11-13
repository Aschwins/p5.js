class Bubble {
    constructor(x, y, r) {
        this.x = x
        this.y = y
        this.r = r
        this.brightness = 0;
    }

    // Movement of the bubble
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    // Showing the bubble
    show() {
        stroke(255);
        strokeWeight(4);
        fill(this.brightness);
        ellipse(this.x, this.y, this.r * 2);
    }

    // Check if mouse is over bubble. Return True or False
    hover(x, y) {
        var d = dist(x, y, this.x, this.y)
        return (d < this.r)
    }

    // Changes brightness of the bubble with given variable c.
    changeColor(c) {
        this.brightness = c;
    }
}