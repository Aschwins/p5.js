pipes = []

function setup() {
	createCanvas(1000, 600);
	b = new Bird(50, height/2, 20);
	p0 = new Pipe(height/2, 100, width, 40);
	pipes.push(p0);
}

function draw() {
	background(100);
	b.show();
	b.move();
	if (frameCount % 200 == 0) {
		let m = random(50, height - 50);
		let w = random(60, 100);
		let x = width;
		let b = 40;
		p = new Pipe(m, w, x, b);
		pipes.push(p);
	}

	for (let i = pipes.length - 1; i >=0 ; i--){
		pipes[i].move()
		pipes[i].show();

		if (pipes[i].x < -pipes[i].b) {
			pipes.splice(i, 1)
		}
	}

}