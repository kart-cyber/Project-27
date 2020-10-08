
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4,
   bobObject5


   
function preload()
{
	
}

function setup() {
	createCanvas(800, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(200,500);
	bobObject2 = new Bob(280,500);
	bobObject3 = new Bob(360,500);
	bobObject4 = new Bob(440,500);
	bobObject5 = new Bob(520,500);

	roof = new Roof(width/2, height/4, 430, 20);

	rope1 = new Rope(bobObject1.body, roof.body, 200,215);
	rope2 = new Rope(bobObject2.body, roof.body, 295,215);
	rope3 = new Rope(bobObject3.body, roof.body, 390,215);
	rope4 = new Rope(bobObject4.body, roof.body, 485,215);
	rope5 = new Rope(bobObject5.body, roof.body, 580,215);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225,225,225);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, { x: 50, y: 45});
	}
}

