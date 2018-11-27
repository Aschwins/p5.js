// Create a rows x cols grid, with widht w. 
var rows = 10;
var cols = 10;
var w = 40;
var grid;

function setup() {
	createCanvas(cols * w + 1, rows * w + 1);
	background(255);
	grid = create2Darray(cols, rows);
	let bomb_init;
	for (i = 0; i < cols; i++) {
		for (j = 0; j < rows; j++) {
			let rng = floor(random(0, 3));
			if (rng == 0 || rng == 1) {
				bomb_init = false;
			} else {
				bomb_init = true;
			}
			grid[i][j] = new Cell(i, j, bomb_init, w);
		}
	}

	for (i=0; i < cols; i++) {
		for (j=0; j < rows; j++) {
			grid[i][j].countNeighbors();
		}
	}
}

function draw() {
	for (i = 0; i < cols; i++) {
		for (j = 0; j < rows; j++) {
			grid[i][j].show()
		}
	}
}

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
	}

	show() {
		if (!this.revealed) {
			fill(255);
			rect(this.x, this.y, this.w, this.w);
		} else {
			if (this.bomb) {
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
						var neighbor =  grid[i][j];
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

// This functions generates a new array with 
function create2Darray(n_rows, m_cols) {
	var arr = new Array(m_cols);
	for (i = 0; i < arr.length; i++) {
		arr[i] = new Array(n_rows);
	}
	return arr;
}

// If we press the mouse in a cell, reveal the cell.
function mousePressed() {
	for (i = 0; i < cols; i++) {
		for (j=0; j < rows; j++) {
			if (grid[i][j].contains(mouseX, mouseY)) {
				grid[i][j].reveal()
			}
		}
	}
}