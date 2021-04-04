var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects

  
  //create 4th row of plinko objects


  //create particle objects
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 

}
f
   pig1.score()
   pig3.score()
   textSize(35) 
   fill("white") 
   text("score: "+score,width-300,50)  
  

async function getbgimage(){

var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJson=await response.json()
console.log(responseJson.datetime)
var datetime=responseJson.datetime
var hour=datetime.slice(11,13)
console.log(hour)
if(hour>=06&&hour<=19){
bg="sprites/bg.png"
}
else{
bg="sprites/bg2.jpg"
}
bgImage=loadImage(bg)
}