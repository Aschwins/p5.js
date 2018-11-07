// Define vertical and horizontal speed and accelaration

// Gravitational pull
var g = 9.81;
var v = 3;
var a = 0;
var v_x0 = 3;
var v_y0 = 0;

var r_x0 = 0;
var r_y0 = 0;

// We need time
var t = 0;

// x posistion
function r_x(t) {
  return r_x0 + v_x0 * t + (a / 2) * t ^ 2;
};


// y posistion
function r_y(t) {
  return r_y0 + v_y0 * t + (g / 2) * t ^ 2;
};


// Define different rgb colors
var col = {
  r: 250,
  g: 50,
  b: 150
};

var circle = {
  x: 0,
  y: 0,
  d: 50
};

// Setup
function setup() {
  createCanvas(600, 400);
  fill(255, 0, 0);
};

function draw() {
  background(150, 0, 150);

  circle.x = r_x(t);
  circle.y = r_y(t);


  // Circle
  ellipse(circle.x, circle.y, circle.d, circle.d);

  t = t + 1;
};

// F = ma => F = a => F_g + F_b = a
// F_g = 9.81
// F_b = 0 for r_y < 600
//     = -20 + t for r_y(t) < 0 