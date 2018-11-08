// local variables
// global variables
// while loops
// for loops
// nested for loops create a grid
// functions: modularity, reuseability

// modular, drawing part, bouncing part, moving part



function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);
	fill(255, 0, 200);
	for (var x = 0; x <= mouseX; x = x + 10) {
		for (var y = 0; y <= height; y = y + 50) {
			ellipse(x, y, 25, 25)
		};
	}
}

// x+= 50
// x = x + 1, x++