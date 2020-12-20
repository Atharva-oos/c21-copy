var a,b;



function setup() {
  createCanvas(800,400);
  a=createSprite(50, 50, 50, 50);
  b=createCanvas(150,50,100,100);
  a.velocityX=3;
  b.velocityX=-3;
  a.shapeColor="green";
  b.shapeColor="green";
}


function draw() {
  background(255,255,255);
 /* b.x=World.mouseX;
  b.y=World.mouseY;*/
  /*if(isTouchinga,b)){
    a.shapeColor="red";
     b.shapeColor="red";
  } 
  else{
    a.shapeColor="green";
   b.shapeColor="green";
  } */
  bounceOff(a,b);
  drawSprites();
}



