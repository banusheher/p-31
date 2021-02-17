const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var maxDrops = 100
var drops = []
var man,manI
var thunderCreatedFrame=0;

var thunder
function preload(){
 manI = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png"
   ,"walking_7.png" ,"walking_8.png") 
  
thunder1 = loadImage("1.png");
thunder2 = loadImage("2.png");
thunder3 = loadImage("3.png");
thunder4 = loadImage("4.png");

}

function setup(){
   engine = Engine.create();
   world = engine.world;
   var canvas = createCanvas(windowWidth,windowHeight);
    
 


   var options = {
      isStatic: true,
  }
  man = Bodies.rectangle(width/2,height-300,20,40,options);

  World.add(world,man)
   if(frameCount%150===0){

      for(var i=0; i<maxDrops; i++){
         drops.push(new Drops(random(0,width-50),random(0,200)))
      }
   }
 }

function draw(){
   Engine.update(engine);
   background("black");
 

   
var rand = Math.round(random(1,4))
//console.log(rand)
if(frameCount%80===0){
   thunderCreatedFrame=frameCount;
   thunder=createSprite(random(50,width-50),random(10,50),10,10)
   switch(rand){
      case 1: thunder.addImage(thunder1);
      break;
      case 2: thunder.addImage(thunder2);
      break;
      case 3: thunder.addImage(thunder3);
      break;
      case 4: thunder.addImage(thunder4);
      default: break;   
   }
   thunder.scale=random(0.3,0.6)

}

if(thunderCreatedFrame + 10 ===frameCount && thunder){
   thunder.destroy();
}
for(var i = 0; i<maxDrops; i++){
   drops[i].showDrops();
   drops[i].updateY()
   
}
var pos = man.position;
//rectMode(CENTER);
//rect(pos.x,pos.y,20,40);

animation(manI,pos.x,pos.y,20,20);
//Matter.Body.scale (man,0.01,0.01)
drawSprites();
}   

