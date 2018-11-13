class Bubble {
	constructor(x, y, r) {
		this.x = x
		this.y = y
        this.r = r
        this.brightness = 0;
	}

	move() {
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
	}

	show() {
		stroke(255);
        strokeWeight(4);
        fill(this.brightness);
        ellipse(this.x, this.y, this.r * 2);
    }
    
    hover(x, y) {
        var d = dist(x, y, this.x, this.y)
        return (d < this.r)
    }

   changeColor(c) {
       this.brightness = c;
   }
}