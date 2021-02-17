class Drops {
    constructor(x,y){
        var options = {
            restitution:1,
            friction:0.1,
            density:1.0
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world,this.body);
    }
    updateY(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,width-50),y:random(0,200)})
        }
    }
    showDrops(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
        
    }
}