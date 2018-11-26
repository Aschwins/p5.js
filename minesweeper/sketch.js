// Create a rows x cols grid, with widht w. 
var rows = 10;
var cols = 10;
var w = 40;
var grid;

function setup() {
	createCanvas(cols * w + 1, rows * w + 1);
	background(100);
	grid = create2Darray(rows, cols);
	let bomb_init;
	for (i = 0; i < rows; i++) {
		for (j = 0; j < cols; j++) {
			let rng = floor(random(0, 3));
			if (rng == 0 || rng == 1) {
				bomb_init = false;
			} else {
				bomb_init = true;
			}
			grid[i][j] = new Cell(i * w, j * w, bomb_init, w)
		}
	}
}

function draw() {
	for (i = 0; i < rows; i++) {
		for (j = 0; j < cols; j++) {
			grid[i][j].show()
		}
	}
}

class Cell {
	constructor(x, y, bomb, w) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.bomb = bomb;
		this.revealed = false;
	}

	show() {
		noFill();
		rect(this.x, this.y, this.w, this.w)
		if (this.bomb) {
			ellipse(this.x + 0.5 * this.w, this.y + 0.5 * this.w, this.w / 2);
		}
	}

	reveal() {
		this.revealed = true;
	}
}

function create2Darray(xin, yin) {
	let x = xin;
	let y = yin;
	let arr = Array(y);
	let arrG = [];
	for (i = 0; i < x; i++) {
		arrG.push(arr);
	}
	return arrG;
}