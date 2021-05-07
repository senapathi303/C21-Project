var canvas;
var music;
var ball,surface1,surface2,surface3,surface4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    ball = createSprite(random(20,750),100,40,40);
    ball.shapeColor = "white";
    ball.velocityX = 4;
    ball.velocityY = 9;

    //create 4 different surfaces
    surface1 = createSprite(0,580,360,30)
    surface1.shapeColor = "blue";
    surface2 = createSprite(295,580,200,30)
    surface2.shapeColor = "orange";
    surface3 = createSprite(515,580,200,30)
    surface3.shapeColor = "red";
    surface4 = createSprite(740,580,220,30)
    surface4.shapeColor = "green";
    




    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    var edges = createEdgeSprites();
    ball.bounceOff(edges);
  if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
      ball.shapeColor = "blue"
      music.play();
  }
  if(surface2.isTouching(ball)){
      ball.shapeColor = "orange"
      ball.velocityX = 0;
      ball.velocityY = 0;
      music.stop();
  }
  if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
    ball.shapeColor = "red"
    
}
if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
    ball.shapeColor = "green"
    
}



    //add condition to check if box touching surface and make it box
    drawSprites();
}
