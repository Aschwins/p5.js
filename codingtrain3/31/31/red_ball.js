// Define vertical and horizontal speed
var gravity = 3;
var v = 3;

// Define different rgb colors
var r = 250;
var g = 50;
var b = 150;

var circle = {
  x: 0,
  y: 0,
  d: 50,
}

// Setup
function setup() {
	createCanvas(600, 400);
  fill(255, 0, 0);
}

function draw() {
  background(150, 0, 150);

  // Circle
  ellipse(circle.x, circle.y, circle.d, circle.d);

  // If the circle leaves the screen on the right changes the speed with *-1
  // and give it another color
  if (circle.x > width) {
    v = -v;
    r = random(0, 255);
    fill(r, g, b);
  }

  // If the circle leaves the screen on the left change the speed with *-1
  // and give it another color
  if (circle.x < 0) {
    v = -v;
    g = random(0, 255);
    fill(r, g, b);
  }

  // Every draw change the position of the circle
  circle.x = circle.x + v;


  // If the circle leaves the screen at the top
  if (circle.y < 0) {
    gravity = -gravity;
    b = random(0, 255);
    fill(r, g, b);
  }

  // If the circle leaves the screen at the bottom.
  if (circle.y > height) {
    gravity = -gravity;
    circle.d = random(45,55)
  }

  circle.y = circle.y + gravity;
}
