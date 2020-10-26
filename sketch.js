
const Render = Matter.Render;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var wall1, wall2, wall3, ground;
var dustbinImage;

function preload(){
   dustbinImage = loadImage("sprites/dustbin.png");
   
}

function setup() {
	createCanvas(1600, 700);

	wall1 = createSprite(1200,500,200,10);
	wall1.shapeColor = "white";
    wall1.addImage("dustbin", dustbinImage);

	wall2 = createSprite(1105,600,10,100);
	wall2.shapeColor = "white";

	wall3 = createSprite(1295,600,10,100);
	wall3.shapeColor = "white";

	engine = Engine.create();
	world = engine.world;

	var wall1_options = {
		isStatic : true
	  }
	  wall1 = Bodies.rectangle(1200,650,200,20,wall1_options);
	  World.add(world,wall1);

	  var wall2_options = {
		isStatic : true
	  }
	  wall2 = Bodies.rectangle(200,380,20,100,wall2_options);
	  World.add(world,wall2);

	  var wall3_options = {
		isStatic : true
	  }
	  wall3 = Bodies.rectangle(250,380,20,100,wall3_options);
	  World.add(world,wall3);

	paper = new Paper(200,450,40);
	ground = new Ground(width/2,670,width,20);

	var render = Render.create({
		element : document.body,
		engine : engine,
		option : {
			width : 1200,
			height : 700,
			wireframes : false
		}
	});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  paper.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 85, y : -85});
	}
}
