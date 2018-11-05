// Declare: var CircleX;
// Initialize! CircleX = 50
var circleX = 0;
var circleY = 0

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background
  background(250, 250, 100);
  // ellipse
  fill(250, 200, 200);
  ellipse(circleX, circleY, 80, 80);

  circleX = circleX + 10;
  circleY = circleY * 1.1 + 0.5

  if (circleX > 600) {
    circleX = 0
  }

  if (circleY > 400) {
    circleY = 0
  }
}
