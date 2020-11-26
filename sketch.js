//Namespacing

const Engine=Matter.Engine;  //universe
const World=Matter.World; //globe
const Bodies= Matter.Bodies; //objects

var engine,world,box1,box2,ground1;


function setup() {
  createCanvas(1200,800);

engine=Engine.create();   // create the Universe
world = engine.world;

box1= new Box(700,320,70,70);
box2=new Box(920,320,70,70);
box3=new Box(700,220,70,70);
box4=new Box(920,220,70,70);
box5=new Box(810,90,70,70);

pig1=new Pig(810,320);
pig2=new Pig(810,220);

log1=new Log(810,260,300,PI/2);
log2=new Log(810,160,300,PI/2);
log3=new Log(760,120,150,PI/7);
log4=new Log(860,120,150,-PI/7);

bird1=new Bird(200,500);

ground1=new Ground(600,780,1200,30);

}

function draw() {
  background(0,0,0);  

  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  
  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();
  
  bird1.display();

  ground1.display();

}
