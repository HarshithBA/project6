var ball1, ball2;
var topEdge, bottomEdge, leftEdge, rightEdge;

function setup() {
  createCanvas(450, 400);

  //ball1
  ball1 = createSprite(200, 200, 15, 15);
  ball1.shapeColor = "orange";

  //ball2
  ball2 = createSprite(150, 200, 15, 15);
  ball2.shapeColor = "red";

  //Top Edge
  topEdge = createSprite(225, 0, 450, 25);
  topEdge.shapeColor = "gray";

  //Bottom Edge
  bottomEdge = createSprite(225, 400, 450, 25);
  bottomEdge.shapeColor = "gray";

  //Left Edge
  leftEdge = createSprite(0, 200, 25, 400);
  leftEdge.shapeColor = "gray";

  //Right Edge
  rightEdge = createSprite(450, 200, 25, 400);
  rightEdge.shapeColor = "gray";
}

function draw() {
  background("lightyellow");

  ball1.bounceOff(leftEdge);
  ball1.bounceOff(rightEdge);
  ball1.bounceOff(bottomEdge);
  ball1.bounceOff(topEdge);

  //ball2 bounceOff:
  ball2.bounceOff(leftEdge);
  ball2.bounceOff(rightEdge);
  ball2.bounceOff(bottomEdge);
  ball2.bounceOff(topEdge);
  

  if (mouseIsPressed) {
    //ball1
    ball1.velocityX = 6; 
    ball1.velocityY = 6;

    //ball2 velocity :
    ball2.velocityX=7;
    ball2.velocityY=7;
    

  }

  drawSprites();
}
