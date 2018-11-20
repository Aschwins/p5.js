class Bird {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.Fg = 0.1;
    this.vy = 0;
  }

  // Showing the bird
  show() {
    noStroke() 
    fill(0);
    ellipse(this.x, this.y, this.r);
  }

  // Moving the bird
  move() {
    if (this.y > height) {
      this.vy = 0;
    } else {
      this.vy = this.vy + this.Fg
    }
    this.y += this.vy
  }

  // Flying the bired.
  fly() {
    this.vy = -3.5;
    if (this.y > height) {
      this.y = this.y - 5;
    }
  }

  // Check if the bird is touching a pipe
  intersect(rectm, rectw, rectx, rectb) {
    if ((this.x + this.r/2 > rectx && this.x - this.r/2 < rectx + rectb) &&
      (this.y - this.r/2 < rectm - 0.5 * rectw || this.y + this.r/2 > rectm + 0.5 * rectw)) {
      return true;
    } else {
      return false;
    }
  }
}