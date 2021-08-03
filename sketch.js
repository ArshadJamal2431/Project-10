var ship ,shipImg;
var sea , seaImg;
function preload(){
shipImg = loadAnimation("ship-1.png","ship-2.png", "ship-3.png","ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(600, 500);

  sea = createSprite(600, 300);
  sea.addAnimation("running",seaImg);
  sea.scale = 0.5;
  sea.velocityX = -2;

  ship = createSprite(50, 200, 20, 50);
  ship.addAnimation("running", shipImg);
  edges = createEdgeSprites();
  
  ship.scale = 0.25;
  ship.x = 90;
  ship.y = 300;
}

function draw() {
  background("blue");

 if(keyDown("right")){
 ship.velocityX = 5;
  }
  if(keyDown("left")){
    ship.velocityX = -5;
  }
  if(keyDown("space")) {
    ship.velocityX = 0;
  }
  if(sea.x < 0) {
   sea.x = sea.width/5.5;
  }
  
     ship.collide(edges);
     drawSprites();
}
  


