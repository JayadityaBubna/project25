class Paper{
    constructor(x,y){
        var op={
         isStatic:false,
         restitution:0.3,
         friction:0.5,
         density:1.2

        }
        
        
        this.body= Bodies.circle(x,y,10,op);
        this.radius=10;
        this.image=loadImage("sprites/paper img.png");

        World.add(world,this.body);

    }

    display(){
     
     fill("blue");
     imageMode(CENTER);
     image(this.image,0,0,70,70);
    }

}