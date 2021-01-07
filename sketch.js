const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world

var score = 0;


function setup() {
  createCanvas(480,820);
  engine  = Engine.create()
  world = engine.world


  ground = new Ground(480,820,1000,10)
  division1 = new Divisions(1,700,5,250)
  division2 = new Divisions(100,700,5,250)
  division3 = new Divisions(200,700,5,250)
  division4 = new Divisions(300,700,5,250)
  division5 = new Divisions(400,700,5,250)
  division6 = new Divisions(480,700,5,250)


  plinko1 = new Plinko(30,100,10)
  plinko2 = new Plinko(130,100,10)
  plinko3 = new Plinko(230,100,10)
  plinko4 = new Plinko(330,100,10)
  plinko5 = new Plinko(430,100,10)

  plinko6 = new Plinko(80,150,10)
  plinko7 = new Plinko(180,150,10)
  plinko8 = new Plinko(280,150,10)
  plinko9 = new Plinko(380,150,10)

  plinko10 = new Plinko(30,200,10)
  plinko11 = new Plinko(130,200,10)
  plinko12 = new Plinko(230,200,10)
  plinko13 = new Plinko(330,200,10)
  plinko14 = new Plinko(430,200,10)

  plinko15 = new Plinko(80,250,10)
  plinko16 = new Plinko(180,250,10)
  plinko17 = new Plinko(280,250,10)
  plinko18 = new Plinko(380,250,10)

  plinko19 = new Plinko(30,300,10)
  plinko20 = new Plinko(130,300,10)
  plinko21 = new Plinko(230,300,10)
  plinko22 = new Plinko(330,300,10)
  plinko23 = new Plinko(430,300,10)

  plinko24 = new Plinko(80,350,10)
  plinko25 = new Plinko(180,350,10)
  plinko26 = new Plinko(280,350,10)
  plinko27 = new Plinko(380,350,10)

  plinko28 = new Plinko(30,400,10)
  plinko29 = new Plinko(130,400,10)
  plinko30 = new Plinko(230,400,10)
  plinko31 = new Plinko(330,400,10)
  plinko32 = new Plinko(430,400,10)

  plinko33 = new Plinko(80,450,10)
  plinko34 = new Plinko(180,450,10)
  plinko35 = new Plinko(280,450,10)
  plinko36 = new Plinko(380,450,10)

  plinko37 = new Plinko(30,500,10)
  plinko38 = new Plinko(130,500,10)
  plinko39 = new Plinko(230,500,10)
  plinko40 = new Plinko(330,500,10)
  plinko41 = new Plinko(430,500,10)



}

function draw() {
  background(0,0,0);
  Engine.update(engine)  


  ground.display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  division6.display()
  plinko1.display()
  plinko2.display()
  plinko3.display()
  plinko4.display()
  plinko5.display()
  plinko6.display()
  plinko7.display()
  plinko8.display()
  plinko9.display()
  plinko10.display()
  plinko11.display()
  plinko12.display()
  plinko13.display()
  plinko14.display()
  plinko15.display()
  plinko16.display()
  plinko17.display()
  plinko18.display()
  plinko19.display()
  plinko20.display()
  plinko21.display()
  plinko22.display()
  plinko23.display()
  plinko24.display()
  plinko25.display()
  plinko26.display()
  plinko27.display()
  plinko28.display()
  plinko29.display()
  plinko30.display()
  plinko31.display()
  plinko32.display()
  plinko33.display()
  plinko34.display()
  plinko35.display()
  plinko36.display()
  plinko37.display()
  plinko38.display()
  plinko39.display()
  plinko40.display()
  plinko41.display()

  //if (frameCount%60===0){
   // particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  //}  

  drawSprites();
  text("50"+score,440,610)
  text("20"+score,340,610)
  text("10"+score,240,610)
  text("20"+score,140,610)
  text("50"+score,40,610)
}
