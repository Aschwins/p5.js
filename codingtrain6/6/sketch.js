// Exncapsulation
// Class -> Template -> Blueprint

// We use let to initialize global variables. These global variables are, in this case, JS classes/objects
let bubble1, bubble2;


function setup() {
	createCanvas(600, 400);
	// new creates an object. object instance.
	bubble1 = new Bubble();
	bubble2 = new Bubble();
	console.log('Hi!')
}

function draw() {
	background(0);
	bubble1.move();
	bubble1.show();
	bubble2.move();
	bubble2.show();
}

class Bubble {
	// We use the constructor function to initialize the class. (the objects setup)
	// What does it mean to be a bubble?

	// data and functionality is in the object.
	constructor() {
		// this key word. reference to current object!
		this.x = 200;
		this.y = 150;
	}

	// functions are part of the object and dont need "function"
	move() {
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
	}

	show() {
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x, this.y, 24, 24)
	}
}