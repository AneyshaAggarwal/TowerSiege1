const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, stand;
var slingshot, ball, ball1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14;
var box15, box16, box17, box18, box19, box20, box21;

function preload()
{
  polygon= loadImage("polygon.png");
}

function setup()
{
 var canvas = createCanvas(1200,700);
 engine = Engine.create();
 world = engine.world;

 ball1= Bodies.circle(400, 400, 20);
 World.add(world, ball1);

 ground= new Ground(600, 700, width, 20);
 stand= new Ground(800, 500, 550, 10);
 ball= new Ball(400, 400);
 slingshot= new SlingShot(ball1.body, {x: 400, y: 400});

 box1= new Box(640, 490, 70, 70);
 box2= new Box(710, 490, 70, 70);
 box3= new Box(780, 490, 70, 70);
 box4= new Box(850, 490, 70, 70);
 box5= new Box(920, 490, 70, 70);
 box6= new Box(990, 490, 70, 70);

 box7= new Box(710, 420, 70, 70);
 box8= new Box(780, 420, 70, 70);
 box9= new Box(850, 420, 70, 70);
 box10= new Box(920, 420, 70, 70);
 box11= new Box(990, 420, 70, 70);

 box12= new Box(780, 350, 70, 70);
 box13= new Box(850, 350, 70, 70);
 box14= new Box(920, 350, 70, 70);
 box15= new Box(990, 350, 70, 70);

 box16= new Box(850, 280, 70, 70);
 box17= new Box(920, 280, 70, 70);
 box18= new Box(990, 280, 70, 70);

 box19= new Box(920, 210, 70, 70);
 box20= new Box(990, 210, 70, 70);

 box21= new Box(990, 140, 70, 70);

 Engine.run(engine);
}

function draw()
{
 background("skyblue");
 Engine.update(engine);

 ground.display();
 stand.display();
 ball.display();

 imageMode(CENTER)
 image(polygon, ball1.position.x, ball1.position.y, 40, 40);

 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();

 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();

 box12.display();
 box13.display();
 box14.display();
 box15.display();

 box16.display();
 box17.display();
 box18.display();

 box19.display();
 box20.display();

 box21.display();

 slingshot.display();

}

function mouseReleased()
{
 slingshot.fly();
 gameState = "launched";
}

/*function keyPressed()
{
 if(keyCode === 32)
 {
  slingshot.attach(ball1.body);
  Matter.Body.setPosition(ball1.body, {x: 300 , y: 330})
  //gameState= "onSling";
 }
}*/