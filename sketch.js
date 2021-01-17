const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;

var ropeLength;
var ropeStiffness;

function setup(){
    createCanvas(800,450);
    engine = Engine.create();
    world = engine.world;

    engine.world.gravity.y = 1;

    ropeLength = 300;
    ropeStiffness = 0;

    ball1 = new Ball(260, 200, 35);
    rope1 = new String(ball1.body, {x: 260, y: 80}, ropeLength, ropeStiffness);

    ball2 = new Ball(330, 200, 35);
    rope2 = new String(ball2.body, {x: 330, y: 80}, ropeLength, ropeStiffness);

    ball3 = new Ball(400, 200, 35);
    rope3 = new String(ball3.body, {x: 400, y: 80}, ropeLength, ropeStiffness);

    ball4 = new Ball(470, 200, 35);
    rope4 = new String(ball4.body, {x: 470, y: 80}, ropeLength, ropeStiffness);

    ball5 = new Ball(590, 100, 35);
    rope5 = new String(ball5.body, {x: 540, y: 80}, ropeLength, ropeStiffness);
    //slingshot = new Slingshot(bird.body, {x: 120, y: 180}, 50, 0.01);
     keyPressed();
}

function draw(){
    background("black");
    Engine.update(engine);

    rope1.display();
    ball1.display();

    rope2.display();
    ball2.display();

    rope3.display();
    ball3.display();

    rope4.display();
    ball4.display();

    rope5.display();
    ball5.display();

    rectMode(CENTER);
    fill(200, 200, 200);
    stroke("white");
    rect(400, 80, 375, 50);
   
}
function keyPressed() {
    if (keyCode === 32) { 
        Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
    } } 
