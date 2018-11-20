class Bird {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.Fg = 0.1;
    this.vy = 0;
  }

  // Showing the bubble
  show() {
    stroke(255);
    strokeWeight(4);
    fill(200);
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    if (this.y > height) {
      this.vy = 0;
      this.Fg = 0;
    } else {
      this.vy = this.vy + this.Fg
    }
    this.y += this.vy * 0.5
  }
}