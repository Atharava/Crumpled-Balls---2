class Ball{
    constructor(x, y){
        var options={
            'restitution': 0.8,
            'friction': 0.5,
            'density': 1.8
        }
        this.image = loadImage("trash.png");

        this.body = Bodies.circle(x, y, 50, options);

        //Matter.Body.setAngle(this.body, PI/2);  //I wanted it to roll....... It didnt work
        
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        //rotate(PI/2);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 130, 130);
        //ellipse(pos.x, pos.y, 40, 40);
    }
}