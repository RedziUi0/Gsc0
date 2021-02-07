var car , testingblock
var speed 


function setup() {
  createCanvas(1600,400);
  car=createSprite(100, 200, 20, 20);
  car.shapecolor="white";
  

  testingblock=createSprite(1000, 200, 40,height/2);

  speed = random(50,250);
  
 
}

function draw() {
  background("black");  

car.velocityX=speed;

if(testingblock.x-car.x < testingblock.width/2 + car.width/2 ){
car.velocityX=0;

if(car.velocityX<100 && car.velocityX>50){
  car.shapecolor="green";
  }
  if(car.velocityX<180 && car.velocityX>100){
    car.shapecolor="yellow";
  }
  if(car.velocityX>180 && car.velocityX<250){
    car.shapecolor="red";
  }
}
drawSprites();
}