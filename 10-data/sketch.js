// Use the preload function to

function preload() {
	// flower = loadJSON("flower.json");
	data = loadJSON("birds.json")
}



function setup() {
	noCanvas();
	var birds = data.birds
	//createP(bird);
	for (i=0; i < birds.length; i++) {
		var family = birds[i].family
		createElement('h1', family);
		for (j = 0; j < birds[i].members.length; j++) {
			var member = birds[i].members[j];
			createP(member);
		}
	}
	
	fill(100);
}

function draw() {
	
}

