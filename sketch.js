const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground,ball;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var groundOption = {
    isStatic:true
  }
  ground = Bodies.rectangle(400,370,800,20,groundOption);
  World.add(world,ground);
  var ballOptions = {
    restitution:0.1
  }
  ball = Bodies.circle(200,200,30,ballOptions);
  World.add(world,ball);
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
}