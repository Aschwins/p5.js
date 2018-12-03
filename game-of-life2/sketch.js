var n_rows = 10;
var m_cols = 10;

function setup() {
	createCanvas(400, 400);
	grid = create2DArray(m_cols, n_rows);
}

function draw() {
	background(255);
}

function create2DArray(m, n) {
	// Creates 2 dimensional array with m columns, n_rows.
	let arr = []
	let i = Array(m)
	for (j = 0; j < i.length; j++) {
		arr[j] = i;
	}
	return arr;
}