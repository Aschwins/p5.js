// Define different rgb colors
var r = 250;
var g = 50;
var b = 150;

var circle = {
    x: 0,
    y: 0,
    d: 50,
    vx: 3,
    vy: 3,
}

// Setup
function setup() {
    createCanvas(600, 400);
    fill(255, 0, 0);
}

function draw() {
    background(150, 0, 150);
    display();
    move();
    bounce();
}

function display() {
    // Circle
    ellipse(circle.x, circle.y, circle.d, circle.d);
}

function bounce() {
    if (circle.x > width || circle.x < 0) {
        circle.vx = -circle.vx;
    }
    if (circle.y > height || circle.y < 0) {
        circle.vy = -circle.vy;
    }
}

function move() {
    circle.x = circle.x + circle.vx;
    circle.y = circle.y + circle.vy;
}