// How to create buttons and other interactive HTML elements with Javascript.

let counter = 0;
var bgcolor;
var button;

function setup() {
	createCanvas(600, 400);
	r = createElement('h1', "Generate Random Numbers by pressing the Mouse!")
	button = createButton("Press here");
	bgcolor = 100;
}

function draw() {
	background(bgcolor);
	rect(counter, 50, 200, 20);
	button.mousePressed(changebgColor);
}

function mousePressed() {
	counter = counter + 1;
	createP("Random number: " + random(0,10) );
	r.html("Oh my god, there they are!!!");
}

function changebgColor() {
	bgcolor = random(0,255);
}
// createCanvas()
// createP()
// createDiv()
// createButton()
// createImage(width, height)

// something.position([x], [y])

// something.html([html], [append])

// createButton("go go go")
// use a callback. button.mousePressed()
// 