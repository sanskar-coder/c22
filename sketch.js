const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var ground;
var engine,world;
var ball;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var groundOP={isStatic:true}
  ground = Bodies.rectangle(200,390,30,10,groundOP);
  World.add(world,ground);
  var ballOP = {restitution:1.0}
  ball = Bodies.circle(200,100,30,ballOP);
  World.add(world,ball);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  rectMode(CENTER);
  fill ("brown");
  rect(ground.position.x,ground.position.y,400,40);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,30);
}