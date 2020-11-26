class Ground{

    //properties
    
    constructor(x,y,width,height){
    
        var options={
            isStatic: true
        }
    
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    
    }
    //functions
    
    display(){
    
        var pos=this.body.position;
        rectMode(CENTER);
        fill ("brown");
        strokeWeight (8);
        stroke("pink");
        rect(pos.x,pos.y,this.width,this.height);
    
    }
    
    }
    
    