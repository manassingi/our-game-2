class rope{

    constructor(bodyA,bodyB){

        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness: 3
            //length: 10
        }
        this.bodyB = bodyB;
		this.bodyA=bodyA;
		
	     this.rope1=Constraint.create(options)
        World.add(world,this.rope1)

    }
    display(){

       // var pointA = this.rope1.bodyA.position;
			//var pointB = this.rope1.bodyB.position;
			push()
			strokeWeight(3.5)
			stroke("#fff");
            // line(pointB.x,pointB.y,pointA.x,pointA.y)
             pop ()
    }


}