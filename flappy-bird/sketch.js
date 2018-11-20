let pipes = []

function setup() {
	createCanvas(1000, 600);
	// Create Bird.
	b = new Bird(100, height / 2, 20, 20);

	// Create first pipe
	p0 = new Pipe(height / 2, 100, width, 40);
	pipes.push(p0);
}

function draw() {
	background(200);
	b.show();
	b.move();

	// Keep adding new pipes.
	if (frameCount % 200 == 0) {
		let m = random(50, height - 50);
		let w = random(60, 100);
		let x = width;
		let b = 40;
		p = new Pipe(m, w, x, b);
		pipes.push(p);
	}

	// Drawing and moving and removing the pipes
	for (let i = pipes.length - 1; i >= 0; i--) {

		// Check if the pipe is touching the Bird
		if (b.intersect(pipes[i].m, pipes[i].w, pipes[i].x, pipes[i].b)) {
			console.log("TOUCHED!!!!");
			pipes[i].red = 255;
		} else {
			pipes[i].red = 0;
		}

		pipes[i].move();
		pipes[i].show();

		// Remove the pipe when it leaves the screen.
		if (pipes[i].x < -pipes[i].b) {
			pipes.splice(i, 1)
		}
	}
}

function keyPressed() {
	if (key == ' ') {
		b.fly();
		console.log(b.vy);
		console.log(b.y);
	}
}