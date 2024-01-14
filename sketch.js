var Sea,Seaimg,ship,ship_sailing;
function preload(){
ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
Seaimg =loadImage("sea.png");
}


function setup(){
  createCanvas(1200,800);
  //crear sprite del mar
  Sea = createSprite(650,400,2120,120);
  Sea.addImage("sea",Seaimg);
  Sea.scale = 0.5
  //crear el sprite del barco
  ship = createSprite(650,380,20,0.5);
  ship.addAnimation("sailing",ship_sailing);
  //posicion y tamaño del barco
  ship.scale = 0.5;
}

function draw() {
  background("blue");

  if (Sea.x <0){
    Sea.x= Sea.width/2;
      }
  
 
 drawSprites();
}