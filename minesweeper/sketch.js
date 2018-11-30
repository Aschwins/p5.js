// Create a rows x cols grid, with widht w. 
var rows = 10;
var cols = 10;
var w = 40;
var grid;
var n_bombs = 10;
var game_won = false;

function setup() {
	createCanvas(cols * w + 1, rows * w + 1);
	background(255);
	grid = create2Darray(cols, rows);

	// Create a grid of minesweeper cells
	for (i = 0; i < cols; i++) {
		for (j = 0; j < rows; j++) {
			grid[i][j] = new Cell(i, j, false, w);
		}
	}

	// The variable which contains all the fields which are bombs
	var used = [];

	// Fill the grid randomly with bombs on spots which not yet contain bombs.
	for (let i = 0; i < n_bombs; i++) {
		// Pick a random bomb spot
		let random_i = floor(random(0, cols));
		let random_j = floor(random(0, rows));

		// Check if there is already a bomb there. 
		//(We can probably improve this!! By checking with grid[random_i][random_j].bomb = true; i--) 
		var new_ = 0;
		for (let i = 0; i < used.length; i++) {
			if (used[i][0] == random_i && used[i][1] == random_j) {
				new_++
			}
		}
		// If the location of the bomb is not already a bomb
		if (new_ == 0) {
			grid[random_i][random_j].bomb = true
		} else {
			// Find a new location!
			i--
		}
		used.push([random_i, random_j])
	}

	// Check how many bombs are around a cell
	for (i = 0; i < cols; i++) {
		for (j = 0; j < rows; j++) {
			grid[i][j].countNeighbors();
		}
	}
}

// Draw the minesweeper cells
function draw() {
	for (i = 0; i < cols; i++) {
		for (j = 0; j < rows; j++) {
			grid[i][j].show()
		}
	}
	if (game_won) {
		background(255);
		textSize(20);
		fill(255, 0, 0);
		text("LEKKER GEDAAN MAAT, POTVERDIKKIE!!!!", 200, 100);
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
	if (mouseButton == LEFT) {
		for (i = 0; i < cols; i++) {
			for (j = 0; j < rows; j++) {
				if (grid[i][j].contains(mouseX, mouseY)) {
					grid[i][j].reveal()
				}
			}
		}
	}
	if (mouseButton == RIGHT) {
		for (i = 0; i < cols; i++) {
			for (j = 0; j < rows; j++) {
				if (grid[i][j].contains(mouseX, mouseY)) {
					console.log("click");
					grid[i][j].mark = !grid[i][j].mark;
				}
			}
		}
	}
}


function revealAll() {
	for (i = 0; i < cols; i++) {
		for (j = 0; j < rows; j++) {
			grid[i][j].revealed = true;
		}
	}
}

function gameFinished() {
	var count = 0;
	for (i = 0; i < cols; i++) {
		for (j = 0; j < rows; j++) {
			if ((!grid[i][j].revealed) || (grid[i][j].bomb)) {
				count++
			}
		}
	}
	console.log(count);
	if (count <= n_bombs) {
		console.log("GEWONNNENENENNENENE");
		game_won = true;
	}
}