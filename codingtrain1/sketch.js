function setup() {
  createCanvas(720, 720);
  background(250);
  print('Hello');
}

// With color functions. one argument = greyscale, two arguments = greyscale + alpha,
// three arguments = RGB, four arguments

function draw() {
  // body
  fill(255, 0, 0);
  rect(340, 250, 40, 150);

  // head
  fill(0, 255, 0, 50);
  noStroke(); // Stroke() and noStroke() show an outline
  ellipse(mouseX, mouseY , 50, 50);

  // eyes
  fill(0, 0, 255); // fill() fills a shape noFill() doesn't fill
  stroke(0, 0 50);
  strokeWeight(4); // outline will mean how many pixels the stroke is.
  ellipse(340, 220, 30, 30);
  ellipse(380, 220, 30, 30);

  // legs
  line(340, 400, 320, 450);
  line(380, 400, 400, 450);

  // arms
  line(340, 325, 300, 360);
  line(380, 325, 420, 360);
}

// Event!
function mousePressed() {
  background(250);
}
