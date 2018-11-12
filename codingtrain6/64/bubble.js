class Bubble {
    // If we define the constructor with parameters. We can use these parameters to initialize different kind of objects.
	constructor(x, y, r) {
		this.x = x;
        this.y = y;
        this.r = r;
	}

	move() {
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
	}

	show() {
		stroke(255);
        strokeWeight(4);
        fill(255, 5, 255, 150);
		ellipse(this.x, this.y, this.r * 2);
	}
}

// We put everything in the new javascript file and it still works!!

// It only works if we reference the .js file in the html file!
