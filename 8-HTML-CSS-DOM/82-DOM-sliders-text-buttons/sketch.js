// Learning about:
// Create button.
// Create slider.
// Create input field.
// .changed() function
// .mouseOver(), .mouseOut() functions

// CSS styling (see index.html), with selectors.
// google: CSS Reference (Mozilla, CSS Property Index)

// CSS with Javascript.

// In CSS there are different kinds of selectors:
// 1: tag. Use a tag which changes the style of all HTML elements equal to tag.
// 2: id. If a HTML element has an id, id='number' in the tag you can use the #id {} to just change that particular element.
// 3: class. You can style group by using class = 'group' in the tag of the HTML element and change the CSS with .group {}

// We can also select HTML element and change them with JavaScript with the select() and selectall() functions.

var bgcolor;
var button;
var s;

// For using JS select()
var selection;

// For using JS selectAll()
var big_selection;

function setup() {
	// Using JavaScript selectors.
	selection = select('#id1');
	selection.mouseOver(changeColor);
	selection.mouseOut(changeColor);

	// If you select with a tag or a class it only selects the first element so we use: selectAll()
	big_selection = selectAll('.class1') // Gives back an array with all HTML 'p' elements
	for (var i = 0; i < big_selection.length; i++) {
		big_selection[i].mouseOver(changeColor);
	}

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

function changeColor() {
	let rand = floor(random(0, 2));
	if (rand == 0) {
		selection.style('color', 'pink');
	} else {
		selection.style('color', 'yellow');
	}
}