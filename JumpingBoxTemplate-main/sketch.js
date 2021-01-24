var canvas ,block1 ,block2,block3,block4;
var music,ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   block1 = createSprite (760,590,200,20);
   block1.shapeColor ("green");
   block2 = createSprite(560,590,200,20);
   block2.shapeColor ("red");
   block3 = createSprite (360,590,200,20);
   block3.shapeColor ("pink");
   block4 = createSprite ("yellow");
   ball = createSprite (200,200,10,10);
   
    //create box sprite and give velocity
    block1.velocityX = -2;
    block2.velocityX = -2;
    block3.velocityX = -2;
    block4.velocityX = -2;
   
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    


    //add condition to check if box touching surface and make it box
    if (keyDown (UP_ARROW)){
        ball.velocityY = -2;
    
    }
    if (keyDown (DOWN_ARROW)){
        ball.velocityY = 2;
    
    }
    if (keyDown (LEFT_ARROW)){
        ball.velocityX = -2;
    
    }
    if (keyDown (RIGHT_ARROW)){
        ball.velocityY = 2;
    
    }
    
    if (ball.isTouching(block1)){
        ball.shapeColor("green");

    }
    if (ball.isTouching(block2)){
        ball.shapeColor("red");
        
    }
    if (ball.isTouching(block3)){
        ball.shapeColor("pink");
        
    }
    if (ball.isTouching(block4)){
        ball.shapeColor("yellow");
        
    }
}
