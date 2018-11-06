var r = 0;
var b = 255;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background
  // map takes 5 arguments map(var to be mapped, from min, from max, to min, to max)
  r = map(mouseX, 0, 600, 0, 255);
  b = map(mouseX, 0, 600, 255, 0);
  background(r, 0, b);

  // ellipse
  fill(250, 118, 222);

  // We used dot notation to extract data from the circle object!
  ellipse(mouseX, 200, 64, 64);
}
