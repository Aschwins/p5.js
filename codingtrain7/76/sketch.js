// Default value in constructor.
// Overlap

// Create an array of bubbles.
let bubbles = [];

function setup() {
	createCanvas(600, 400);
	// Create 10 random bubbles.
	for (let i = 0; i < 10; i++) {
		let x = random(0, 600);
		let y = random(0, 400);
		let r = random(20, 80);
		b = new Bubble(x, y, r);
		bubbles.push(b);
	}
}

function draw() {
	background(0);
	// If bubbles overlap color background

	// Iterated over all drawn bubbles
	for (let i = 0; i < bubbles.length; i++) {
		// If mouse over bubble color grey else black.
		if (bubbles[i].hover(mouseX, mouseY)) {
			bubbles[i].changeColor(100);
		} else {
			bubbles[i].changeColor(0);
		}
		// Move and show the bubbles.
		bubbles[i].show();
		bubbles[i].move();
	}

}

function mousePressed() {
	for (i = bubbles.length - 1; i >= 0; i--) {
		// If mouse is pressed and mouse is over a bubble, remove the bubble.
		if (bubbles[i].hover(mouseX, mouseY)) {
			bubbles.splice(i, 1);
		}
	}
}