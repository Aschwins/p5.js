// return
// create a function that returns something.

function setup() {
	createCanvas(600, 400);
}

function draw() {
    fill(randomRGB())
    rect(200, 200, 100, 50);
}

function randomRGB() {
    var r = random(0,255);
    var g = random(0,255);
    var b = random(0,255);
    return r,g,b;
}