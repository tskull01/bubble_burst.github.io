var bubbles;
var player; 
var players;
var bubble;
var clicked;
var wallLeft, wallRight,wallTop;
var rows;
var WALL_THICKNESS = 30;
function setup(){
createCanvas(850, 900);
fullscreen();
rows = 4;
//Starting player bubble
players = new Group();
player = new Bubble(width/2, 800);
player.setImage();
players.add(player.bubble);
//Add rows of bubbles
bubbles = new Group(); 
for(var i = 0; i < 8; i ++){
    for(var j = 0; j < rows; j ++){
        bubble = new Bubble(70 + 100 * i, 100 + 103 * j);
        bubble.setImage();
        bubbles.add(bubble.bubble);
        }
    }
    wallLeft = createSprite(-WALL_THICKNESS/2, height/2, WALL_THICKNESS, height);
  wallLeft.immovable = true;

  wallTop = createSprite(width/2, -WALL_THICKNESS/2, width+WALL_THICKNESS*2, WALL_THICKNESS);
  wallTop.immovable = true;

  wallRight = createSprite(width+WALL_THICKNESS/2, height/2, WALL_THICKNESS, height);
  wallRight.immovable = true;

    clicked = false; 
}
function draw(){
background(100); 
if(clicked == true){
strokeWeight(10);
//line(width/2,770,mouseX,670);
}
//Check for game over
for(var i = 0; i < bubbles.length;i++){
    if(bubbles[i].position.y > 780 || bubbles.length == 1){
        gameOver();
    }
}
players.bounce(wallLeft); 
players.bounce(wallRight);
players.collide(wallTop,stick); 
players.collide(bubbles, stick);
drawSprites();
drawSprite(player.bubble);
}
function mousePressed(){
clicked = true; 
}
function mouseReleased(){
    clicked = false;
    //Get angle from starting position to the mouse
   var angle = degrees(atan2(width/2, mouseX));
   console.log(angle)
   if(angle > 60){
     angle =  angle * -1.9
   }else if(angle < 40 && angle > 30){
      angle = angle * -1.7
   }else if(angle < 30){
       angle = angle * -1.1
   }else if(angle > 40 && angle < 60){
    angle = angle * -1.8
   }
   console.log(angle)
player.bubble.setSpeed(player.velocity,angle);
player = new Bubble(width/2, 800);
player.setImage();
players.add(player.bubble);
}
function stick(spriteA, spriteB){
 for(var i = 0;i < players.length; i++){
//Player bubble stops when it comes into contact with other bubbles
    spriteA.velocity.y = spriteB.velocity.y;
    spriteA.velocity.x = spriteB.velocity.x;
    //Check if the bubbles is the same color
    if(spriteA.shapeColor.levels[0] == spriteB.shapeColor.levels[0]){
        for(var i = 0;i < bubbles.length;i++){
            if(spriteB.overlap(bubbles[i])){
                //Check for bubbles clusters
                if(spriteB.shapeColor.levels[0] == bubbles[i].shapeColor.levels[0]){
                    bubbles[i].remove(); 
                    //Remove floating bubbles
                    if(!bubbles[i].overlap(bubbles)){
                        if(!bubbles[i].collide(bubbles) || !spriteA.collide(bubbles)){
                        bubbles[i].remove();
                        }
                     }
                }
            }
        }
        spriteA.remove();
        spriteB.remove();
    }else{
     bubbles.add(spriteA);
    } 
 }
}
function gameOver(){
console.log("GameOver")
bubbles.removeSprites();
for(var i = 0; i < 8; i ++){
    for(var j = 0; j < rows; j ++){
        bubble = new Bubble(70 + 100 * i, 100 + 103 * j);
        bubble.setImage();
        bubbles.add(bubble.bubble);
        }
    }
}