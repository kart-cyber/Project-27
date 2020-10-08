class Rope {
    constructor(body1,body2,offsetX,offsetY) {
              this.offsetX = offsetX
              this.offsetY = offsetY

        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB : {x: this.offsetX, y: this.offsetY},
            length: 10,
            stiffness: 0.04
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        


    }

    display() {
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;

            strokeWeight(4);

              var Anchor1X = pointA.x;
              var Anchor1Y = pointA.y;
              var Anchor2X = pointB.x + this.offsetX;
              var Anchor2Y = pointB + this.offsetY;
            
            line(Anchor1X.x, Anchor1Y.y, Anchor2X.x, Anchor2Y.y);
        }
    }
}