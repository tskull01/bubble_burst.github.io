function Bubble(x,y){
this.x = x;
this.y = y; 
this.bubble = createSprite(this.x, this.y, 60,60);
this.bubble.setCollider("circle",0,0,53); 
this.bubble.setVelocity = (0,-2); 
//this.bubble.debug = true;
this.velocity = 7;
this.imageInt = floor(random(1,6));
this.setImage = function(){
    switch(this.imageInt){
        case 1:
        var img = loadImage('images/android.png'); 
        this.bubble.addImage(img);
        this.bubble.shapeColor = color(1,0,0);
        break;
        case 2:
        var img = loadImage('images/angular.png'); 
        this.bubble.addImage(img);
        this.bubble.shapeColor = color(2,0,0);
        break;
        case 3:
        var img = loadImage('images/java.png'); 
        this.bubble.addImage(img);
        this.bubble.shapeColor = color(3,0,0);
        break; 
        case 4:
        var img = loadImage('images/javascript.png'); 
        this.bubble.addImage(img);
        this.bubble.shapeColor = color(4,0,0);
        break;
        case 5: 
        var img = loadImage('images/visual_studio.png'); 
        this.bubble.addImage(img);
        this.bubble.shapeColor = color(5,0,0);
        break;
    }
}
}