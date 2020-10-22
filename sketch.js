var frect, mrect;
var frect1, mrect1;


function setup() {
  createCanvas(800,800)
  frect=createSprite(200, 200, 75, 75);
  frect.shapeColor = "green";
  
  mrect=createSprite(400, 200, 75, 75);
  mrect.shapeColor = "green";


  frect1=createSprite(15, 400, 75, 75);
  frect1.shapeColor = "lightblue";
  frect1.velocityX=4;

  mrect1=createSprite(400, 400, 75, 75);
  mrect1.shapeColor = "lightblue";
  mrect1.velocityX=-4;
}

function draw() {
  background(0);  
  
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;

  if(isTouching(frect, mrect))
  {
    frect.shapeColor="red";
    mrect.shapeColor="red";
  }
  else
  {
    frect.shapeColor="green";
    mrect.shapeColor="green";
  }

  bounceOff(frect1, mrect1);

  bounceOff(mrect,frect1)

  bounceOff(mrect,mrect1)


  drawSprites();

}
