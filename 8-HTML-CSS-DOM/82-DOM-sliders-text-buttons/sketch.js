// Learning about:
// Create button.
// Create slider.
// Create input field.
// .changed() function
// .mouseOver(), .mouseOut() functions

// CSS styling (see index.html), with selectors.
// google: CSS Reference (Mozilla, CSS Property Index)

// CSS with Javascript.



var bgcolor;
var button;
var s;

function setup() {
	createCanvas(600, 400);
	bgcolor = 100;

	// Paragraph 1 -- A button.
	createP('Press this button top change the background color:');
	button = createButton("Change Color");

	// Paragraph 2 -- A slider.
	createP('Use the slider to change the circle size:');
	s = createSlider(10, 100, 60, 2);
	createP("");

	// Paragraph 3 -- An input field.
	createP("Hey, who are you?")
	input = createInput("Type your name.")

	// Paragraph 4 -- A changable paragraph.
	p4 = createP("This paragraph is able to change when you move the mouse to other places on the screen.")
	p4.mouseOver(overparagraph);
	p4.mouseOut(outparagraph);

	input.changed(updateText);

	// Styling with JavaScript
	p4.style("background-color", "pink") //("NAME OF STYLE", "VALUE OF STYLE")
}

function updateText() {
	p4.html(input.value());
}

function draw() {
	background(bgcolor);

	// If the mouse is pressed on the button, change the background color. 
	button.mousePressed(changebgColor);
	ellipse(100, 100, s.value(), s.value());
	fill(200, 50, 200);

	// Draw the text input in the canvas.
	text(input.value(), 400, 300);
}

function changebgColor() {
	bgcolor = random(0, 255);
}

function overparagraph() {
	p4.html("You did it!")
}

function outparagraph() {
	p4.html("And you're gone again :(")
}