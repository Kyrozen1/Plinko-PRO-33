const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var particle;
var playerturn = 0;
var gameState = "Play";
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,375));
  }

  Engine.run(engine);    
}
 
function draw() {
  background("black");
  Engine.update(engine);
  textSize(30)
  fill("white")
  text("Score: "+score,20,40);
  textSize(25)
  fill("white")
  text("500", 20, 550)
  text("500", 100, 550)
  text("500", 180, 550)
  text("500", 260, 550)
  text("100", 340, 550)
  text("100", 420, 550)
  text("100", 500, 550)
  text("200", 580, 550)
  text("200", 660, 550)
  text("200", 740, 550)

  if(count >= 5){
    textSize(90)
    fill("white")
    text("GameOver", 170, 260)
  }

  ground.display();  
  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
     
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>0 && particle.body.position.x<300){
        score=score+500;
        particle=null;
        if(count>=5){
          gameState = "End";
        }
      }
    }
  } 

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>301 && particle.body.position.x<600){
        score=score+100;
        particle=null;
        if(count>=5){
          gameState = "End";
        }
      }
    }
  }

  if(particle!=null){
    particle.display();
    if(particle.body.position.y>760){
      if(particle.body.position.x>601 && particle.body.position.x<800){
        score=score+200;
        particle=null;
        if(count>=5){
          gameState = "End";
        }
      }
    }
  }
}

function mousePressed(){
  if(gameState !== "End"){
    count++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}