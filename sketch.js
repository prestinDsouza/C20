var movingrect,fixedrect
function setup() {
  createCanvas(800,400);
  movingrect=createSprite(500, 200, 50, 100);
fixedrect=createSprite(100,200,100,50) 
movingrect.shapeColor="green"
fixedrect.shapeColor="green"
movingrect.velocityX=-2
fixedrect.velocityX=2
}

function draw() {
  background(0);  
  drawSprites();
//movingrect.x=mouseX
//movingrect.y=mouseY

if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 && 
   movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
   movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2 &&
   fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
movingrect.shapeColor="red"
fixedrect.shapeColor="red"
movingrect.velocityX*=-1
fixedrect.velocityX*=-1
}else{
  movingrect.shapeColor="green"
  fixedrect.shapeColor="green"

}


}