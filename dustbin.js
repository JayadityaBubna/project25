class Dustbin{
    constructor(x,y,height,width){
      
      var opt={
        isStatic:true
      }

      this.body= Bodies.rectangle(x,y,width,height,opt);
      this.width=width;
      this.height=height;
      this.image=loadImage("sprites/dustbingreen.png");

      World.add(world,this.body);


    }

    display(){

        imageMode(CENTER);
        fill("green");
        image(this.image,0,0,this.width,this.height);




    }



}