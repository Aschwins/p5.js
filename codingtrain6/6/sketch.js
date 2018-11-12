// Exncapsulation
// Class -> Template -> Blueprint
// new creates an object. object instance.
// functions are part of the object
// data and functionality in the object

// constructer functions. is a objects setup
// this key word. reference to current object

// let bubble


let bubble1, bubble2;


function setup() {
	createCanvas(600, 400);
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
	constructor() {
		this.x = 200;
		this.y = 150;
	}

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