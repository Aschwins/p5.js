var bgcolor;
var button;
var s;

function setup() {
	createCanvas(600, 400);
	bgcolor = 100;
	createP('Press this button top change the background color:');
	button = createButton("Change Color");
	createP('Use the slider to change the circle size:');
	s = createSlider(10, 100, 60, 2)
	createP("");
	input = createInput("Type your name.")
}

function draw() {
	background(bgcolor);
	rect(50, 50, 20, 20);
	button.mousePressed(changebgColor);
	ellipse(100, 100, s.value(), s.value());
	fill(200, 50, 200);
	text(input.value(), 400, 300);
}

function changebgColor() {
	bgcolor = random(0, 255);
}