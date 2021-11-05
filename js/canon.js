class Canon {
    constructor(x, y, w, h, angle) {
        this.x = x;
        this.y = y;     
        this.width = w;
        this.height = h;
        this.angle = angle;
        this.snout = loadImage("assets/final.png");
        this.stand = loadImage("assets/stand.png");
        this.floor = loadImage("assets/floor.png")    
    }
    
    display() {
        if (keyIsDown(RIGHT_ARROW) && this.angle<-0.4 ) {
            this.angle +=0.05;
        }
        if (keyIsDown(LEFT_ARROW)&& this.angle>-PI/1.5) {
            this.angle -= 0.05;
        }
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        imageMode(CORNER);
        image(this.snout, 0,0, this.width, this.height);
        pop();
        imageMode(CENTER);
        image(this.stand, this.x , this.y-heightScreen/62.26 , widthScreen/6, heightScreen/7);
        image(this.floor, this.x , this.y+heightScreen/14+20-heightScreen/62.26 , widthScreen/5, 40);
    }
}