
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine,myWorld,ground,//paper1
 dustbinleftSprite,dustbinrightSprite,dustbinbottomSprite;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    dustbinleftSprite=createSprite(550,600,30,120);
	dustbinrightSprite=createSprite(700,600,30,120);
	dustbinbottomSprite=createSprite(630,670,150,15);

	//paper1=new Paper(500,320,50,50);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  //paper1.display();




  
  drawSprites();
 
}



