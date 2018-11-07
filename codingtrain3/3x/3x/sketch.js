var on = false;

function setup() {
	createCanvas(600, 400);
	background(100);
}

function draw() {
	if (on) {
		background(255);
	} else {
		background(100);
	}
	rect(50, 50, 30, 30);

	// Hover
	if (mouseX > 50 && mouseX < 80 && mouseY > 50 & mouseY < 80) {
		fill(200);
	}
	else {
		fill(255);
	}
}

function mousePressed() {
	if (mouseX > 50 && mouseX < 80 && mouseY > 50 & mouseY < 80) {
		on = !on;
	}
}



// Make a program with
// if, else if, else
// if one if or else if is true the rest wont get excuted.
// and or && ||

// use mouseIsPressed boolean variable - held down
// function mousePressed() {} is for event when mouse is pressed once.

// light on or off. var on = false. own boolean varialbe. 

// use not operator: !

// moving button and changing shapes