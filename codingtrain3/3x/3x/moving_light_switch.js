/*
The following code will have a moving rectangle across the screen which is also a button.
If you click outside the button it will indicate red. If you click inside the button is will
switch on/off the light.
*/

// The light and speed variables
var on = false;
var vx = 3;
var vy = 3;

// The rectangle
var rectangle = {
	x : 50,
	y : 50,
	w : 50,
	h : 50
}

function setup() {
	createCanvas(600, 400);
	background(100);
}

function draw() {
	// The light
	if (on) {
		background(255);
	} else {
		background(100);
	}

	// The rectangle
	rect(rectangle.x, rectangle.y, rectangle.w, rectangle.h);

	// Hover
	if (mouseX > rectangle.x && mouseX < (rectangle.x + rectangle.w) && 
		mouseY > rectangle.y && mouseY < (rectangle.y + rectangle.h)) {
		fill(0, 255, 0);
	} else {
		fill(255);
	}

	// If mousepressed outside the rectangle indicate button
	if (mouseIsPressed && !(mouseX > rectangle.x && mouseX < (rectangle.x + rectangle.w) && 
		mouseY > rectangle.y & mouseY < (rectangle.y + rectangle.h))) {
		fill(255, 0, 0);
	}

	// Movement of the rectangle
	rectangle.x = rectangle.x + vx
	rectangle.y = rectangle.y + vy

	// If the rectangle leaves the screen change its direction.
	if (rectangle.x > width || rectangle.x < 0) {
		vx = -1 * vx
	}

	if (rectangle.y > height || rectangle.y < 0){
		vy = -1 * vy
	}

}

function mousePressed() {
	// The lightswitch
	if (mouseX > rectangle.x && mouseX < (rectangle.x + rectangle.w) && 
		mouseY > rectangle.y && mouseY < (rectangle.y + rectangle.h)) {
		on = !on;
	}
}
