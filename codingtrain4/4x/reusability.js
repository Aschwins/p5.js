// define a function with parameters which can draw stuff.
// make it draw in random places. 

// Program to draw random amount of flowers on the screen as a background.

var n_flowers = 20;

function setup() {
	createCanvas(600, 400);
	background(50);
	for (var i = 0; i < n_flowers; i++) {
		flower(random(0, width), random(0, 400), random(40, 80), random(40, 80));
	}
}

function draw() {

	
}

function flower(x, y ,w, h) {
	//stem
	fill(0, 255, 0)
	rect(x - w/8, y, w/4, h*2);

	// center circle

	fill(0, 0, 255)
	ellipse(x, y, w * 0.8, h * 0.8);

	// petals around it
	fill(255, 0, 0)
	ellipse(x + w/2, y, w/2, h/2);
	ellipse(x, y + h/2, w/2, w/2);
	ellipse(x-w/2, y, w/2, h/2);
	ellipse(x, y-h/2, w/2, h/2);

	//stem

}