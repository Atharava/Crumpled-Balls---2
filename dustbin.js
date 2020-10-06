class Dustbin{
    constructor(x, y, width, height){
        var stayPut={
            'isStatic': true,
            'density': 5000
        }

        this.image = loadImage("OriginalRecyclingBin.png");

        this.x = x;
        this.y = y;

        this.wide = width;
        this.high = height;

        this.bottomRect = Bodies.rectangle(this.x, this.y, this.high, this.wide, stayPut);
        this.leftRect = Bodies.rectangle(this.x-(this.high/2), (this.y - (this.high/2)), this.wide, this.high, stayPut);
        this.rightRect = Bodies.rectangle(this.x+(this.high/2), (this.y - (this.high/2)), this.wide, this.high, stayPut);
        
        World.add(world, [this.bottomRect,  this.leftRect, this.rightRect]);
    }
    display(){
        var posB = this.bottomRect.position;
        var posL = this.leftRect.position;
        var posR = this.rightRect.position;

        push();
        rectMode(CENTER);
        rect(posB.x, posB.y, this.high, this.wide);
        pop();

        push();
        rectMode(CENTER);
        rect(posL.x, posL.y, this.wide, this.high);
        pop();

        push();
        rectMode(CENTER);
        rect(posR.x, posR.y, this.wide, this.high);
        pop();

        push();
        imageMode(CENTER);
        image(this.image, posB.x, (posB.y-(this.high/2)), this.high+20, this.high+20);
        pop();
    }
}