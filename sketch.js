
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var ground;
var d1 , d2 , d3;
function preload()
{
  dustbinImage=loadImage("dustbingreen.png")
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

  paper=new Paper(200,200);
  myground=new Ground(800,690);
  d1=new dustbin(1100,665,170,20);
  d2=new dustbin(1005,615,20,120);
  d3=new dustbin(1195,615,20,120);
  
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)


  
  
  paper.display();
  myground.display();
  d1.display();
  d2.display();
  d3.display();
image(dustbinImage,985,550,250,150)



  
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:1000,y:-1000})
  }
}



