var resolution = 4;
var gen;
var nextgen;


function setup() {
	createCanvas(400, 400);
	background(240);
	gen = createGen1(width / resolution, height / resolution);
}

function draw() {
	nextgen = nextGen(gen);
	gen = nextgen;
	drawGen(nextgen);
}

function createGen1(rows, cols) {
	let arr = [];
	for (i = 0; i < rows; i++) {
		var row = []
		for (j = 0; j < cols; j++) {
			let element = floor(random(0, 2));
			row.push(element);
		}
		arr.push(row);
	}
	return arr;
}

function drawGen(generation) {
	var gridx = generation[0].length;
	var gridy = generation.length;
	for (i = 0; i < gridx; i++) {
		for (j = 0; j < gridy; j++) {
			noFill();
			if (generation[i][j] == 0) {
				fill(0);
			} else {
				fill(255);
			}
			rect(i * resolution, j * resolution, resolution, resolution);
		}
	}
}

function nextGen(currentgen) {
	let cg = currentgen;
	let ng = currentgen;
	for (i = 1; i < cg[0].length - 1; i++) {
		for (j = 1; j < cg[0].length - 1; j++) {
			count = 0;
			for (i2 = -1; i2 < 2; i2++) {
				for (j2 = -1; j2 < 2; j2++) {
					count += cg[i + i2][j + j2]
				}
			}
			count -= cg[i][j];
			if (cg[i][j] == 0 && count == 3) {
				ng[i][j] = 1;
			} else if (cg[i][j] == 1 && (count > 3 || count < 2)) {
				ng[i][j] = 0;
			}
		}
	}
	return ng;
}

function countNeighbours(grid, x, y) {
	let sum = 0;
	for (let i = -1; i < 2; i++) {
		for (let j = 0; j < 2; j++){
				sum += grid[x + i][y + i];
			}
		}
		sum -= grid[i][j];
		return sum;
	}