// My first javascript Object.
var circle = {
  x : 0,
  y: 200,
  diameter: 50
};

var r = 218;
var g = 160;
var b = 221;

function setup() {
  createCanvas(600, 400)
}

function draw() {
  // background
  background(r, g, b)

  // ellipse
  fill(250, 200, 200);

  // We used dot notation to extract data from the circle object!
  ellipse(circle.x, circle.y, circle.diameter, circle.diamater)

  circle.x = circle.x + 1
}
