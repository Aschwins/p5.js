// We can create a javascript object variable, like so:
var spot = {
  x: 100,
  y: 50
};

var col = {
  r: 255,
  g: 0,
  b: 0
};

function setup() {
  createCanvas(600, 400);
  background(0);
};


function draw() {
  // We can use the random function to get a random number between (a, b)
  spot.x = random(0, width);
  spot.y = random(0, height);
  col.r = random(100, 255);
  col.g = 0;
  col.b = random(100, 190);

  noStroke()
  fill(col.r, col.g, col.b, 100);
  ellipse(spot.x, spot.y, 24, 24);
};
