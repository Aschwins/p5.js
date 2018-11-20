class Pipe {
  constructor(m, w, x, b) {
    this.m = m;
    this.w = w;
    this.x = x;
    this.b = b;
  }

  show() {
    fill(255);
    noStroke();
    // bottom pipe
    rect(this.x, this.m + (this.w / 2), this.b, height - this.m - this.w/2);

    // top pipe
    rect(this.x, 0, this.b, this.m - this.w / 2);
  }

  move() {
    this.x = this.x - 1;
  }
}