// Constructor arguments

let bubble1, bubble2;


function setup() {
    createCanvas(600, 400);
    
    // We create two bubbles with different starting locations and different diameters.
	bubble1 = new Bubble(200, 200, 40);
	bubble2 = new Bubble(400, 200, 20);
	console.log('Hi!')
}

function draw() {
	background(0);
	bubble1.move();
	bubble1.show();
	bubble2.move();
	bubble2.show();
}