function setup() {
  createCanvas(720, 720);
  background(250);
}

function draw() {
  // body
  fill(255, 0, 0);
  rect(340, 250, 40, 150);

  // head
  fill(0, 255, 0);
  ellipse(360, 250 , 150, 150);

  // eyes
  fill(0, 0, 255);
  ellipse(340, 220, 30, 30);
  ellipse(380, 220, 30, 30);

  // legs
  line(340, 400, 320, 450);
  line(380, 400, 400, 450);

  // arms
  line(340, 325, 300, 360);
  line(380, 325, 420, 360);
}
