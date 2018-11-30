class Cell {
  constructor(x, y, bomb, w) {
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = y * w;
    this.w = w;
    this.bomb = bomb;
    this.revealed = false;
    this.neighborCount = 0;
    this.mark = false;
  }

  show() {
    if (!this.revealed) {
      if (this.mark) {
        strokeWeight(1);
        fill(255, 0, 0);
        triangle(this.x + 0.5 * this.w, this.y + 0.25 * w, this.x + 0.3 * this.w, this.y + 0.4 * this.w, this.x + 0.5 * this.w, this.y + 0.4 * this.w)
        strokeWeight(3);
        line(this.x + 0.5 * this.w, this.y + 0.25 * this.w, this.x + 0.5 * this.w, this.y + 0.75 * this.w);
        line(this.x + 0.4 * this.w, this.y + 0.75 * this.w, this.x + 0.6*this.w, this.y + 0.75 * this.w);
        strokeWeight(1);
      } else {
        strokeWeight(1);
        fill(255);
        rect(this.x, this.y, this.w, this.w);
      }
    } else {
      if (this.bomb) {
        fill(100);
        rect(this.x, this.y, this.w, this.w);
        fill(255, 0, 0);
        ellipse(this.x + 0.5 * this.w, this.y + 0.5 * this.w, this.w / 2);
      } else {
        fill(200);
        rect(this.x, this.y, this.w, this.w)
        textAlign(CENTER);
        textSize(20);
        fill(0);
        text(this.neighborCount, this.x + 0.5 * w, this.y + 0.5 * w + 6);
      }
    }
  }

  reveal() {
    this.revealed = true;
    gameFinished();
    if (this.bomb) {
      revealAll();
    } else if (this.neighborCount == 0) {
      for (let ioff = -1; ioff < 2; ioff++) {
        for (let joff = -1; joff < 2; joff++) {
          let i = this.i + ioff;
          let j = this.j + joff;
          if (((i > -1) && (i < cols) && (j > -1) && (j < rows)) && !grid[i][j].bomb && !grid[i][j].revealed) {
            grid[i][j].reveal()
          }
        }
      }
    }
  }

  contains(pointx, pointy) {
    return ((pointx > this.x) && (pointx < this.x + this.w) && (pointy > this.y) && (pointy < this.y + this.w));
  }

  countNeighbors() {
    var total = 0;
    if (this.bomb) {
      total = -1;
    } else {
      for (let ioff = -1; ioff < 2; ioff++) {
        for (let joff = -1; joff < 2; joff++) {
          let i = this.i + ioff;
          let j = this.j + joff;
          if (((i > -1) && (i < cols) && (j > -1) && (j < rows))) {
            var neighbor = grid[i][j];
            if (neighbor.bomb) {
              total++
            }
          }
        }
      }
    }
    this.neighborCount = total;
  }
}