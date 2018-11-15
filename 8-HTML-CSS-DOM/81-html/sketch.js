let counter = 0;

function setup() {
	createCanvas(600, 400);
	r = createElement('h1', "Generate Random Numbers by pressing the Mouse!")
}

function draw() {
	background(100);
	rect(counter, 50, 200, 20);
}

function mousePressed() {
	counter = counter + 1;
	createP("Random number: " + random(0,10) );
	r.html("Oh my god, there they are!!!")
}

// createCanvas()
// createP()
// createDiv()
// createButton()
// createImage(width, height)

// something.position([x], [y])

// something.html([html], [append])

