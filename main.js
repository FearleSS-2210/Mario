function preload() {
	world_start = loadSound("world_start.wav");
	coin = loadSound("coin.wav");
	game_over = loadSound("gameover.wav");
	jump = loadSound("jump.wav");
	kick = loadSound("kick.wav");
	mar_die = loadSound("mariodie.wav");

	setSprites();
	MarioAnimation();
}

function setup() {
	video = createCapture(VIDEO);
	video.size(500,235);
	video.parent('game_console');

	canvas = createCanvas(1000,325);
	canvas.parent('canvas');
	instializeInSetup(mario);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw() {
	game()
}

function modelLoaded() {
	console.log("Model is loaded…");
  }
  
  function gotPoses(results) {
	if (results.length > 0) {
	  console.log(results);
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.Y;
	}
  }