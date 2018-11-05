// Setup function, happens just once!
function setup(){
  createCanvas(600, 400);
  background(250, 250, 100);
}

// Draw runs over and over again, loops
function draw() {
  // no outline
  noStroke();
  // fill with RGB and alpha
  fill(250, 200, 200, 50);

  // ellipse We use one variable here: mouseX
  ellipse(mouseX, mouseY, 25, 25);

  fill(200, 250, 200);
  rect(400, 100, 50, 50);
}

// Is an event. Waits patiently untill event happens!
// When mouse gets pressed background get drawn again!
function mousePressed() {
  background(250, 250, 100);

}
