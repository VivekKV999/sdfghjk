class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.img1=loadImage("sprites/sling1.png")
        this.img2=loadImage("sprites/sling2.png")
        this.img3=loadImage("sprites/sling3.png")
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(15);
            stroke(57,0,12);
            if(pointA.x < 260)
            {
                line(pointA.x-15, pointA.y, pointB.x+20, pointB.y);
                line(pointA.x-15, pointA.y, pointB.x-10, pointB.y);
                image(this.img3,pointA.x-18,pointA.y-15,10,30);
            }
            else{
                line(pointA.x+15, pointA.y, pointB.x+20, pointB.y);
                line(pointA.x+15, pointA.y, pointB.x-10, pointB.y);
                image(this.img3,pointA.x+18,pointA.y-15,10,30);
            }
           
        }
        image(this.img1,250,20);
        image(this.img2,220,20);
       // 

    }
    
}