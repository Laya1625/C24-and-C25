class Paper{
    constructor(x, y) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2

        }
        this.image=loadImage("paper.png")

        this.body=Bodies.circle(x,y,80,options);
        this.radius=80;
        World.add(world, this.body);
}
display(){
    var pos=this.body.position
    fill("white");
    ellipseMode(RADIUS)
   // ellipse(pos.x, pos.y, this.radius,this.radius);
    image(this.image,pos.x,pos.y,this.radius,this.radius)

}
}
