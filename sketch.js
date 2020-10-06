const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball1, bin1, bin2;
var bgImg;

function preload(){
    bgImg = loadImage("hardwood.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    var test={
        isStatic: false
    }

    ground = Bodies.rectangle(450,400,900,20,ground_options);
    World.add(world,ground);
    
    ball1 = new Ball(200, 200);

    bin1 = new Dustbin(600, 395, 5, 150, test);

    //bin2 = new Dustbin(700, 400, 10, 100);
    // console.log(keyCode);
}

function draw(){
    background(bgImg);
    Engine.update(engine);

    textSize(30);
    fill("white");
    stroke("black");
    strokeWeight(4);
    text("Use up, left and right arrow keys to move the trash!", 50, 50, 800, 50);
    fill("brown");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,900,20);
    ball1.display();
    //bin2.display();
    bin1.display();

    bin1.depth = 1;
    ball1.depth = 1;
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        Matter.Body.applyForce(ball1.body, ball1.body.position, {x: 150, y: -160});
    }
    if(keyCode === LEFT_ARROW){
        Matter.Body.applyForce(ball1.body, ball1.body.position, {x: -150, y: -160});
    }
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(ball1.body, ball1.body.position, {x:  0, y: -180});
    }
}