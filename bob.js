class Bob{
    constructor(x, y) {
        var bob_options = {
            restitution: 1.0,
            density: 0.5,
            friction: 0,
            isStatic: false
    
        }
        this.body = Bodies.circle(x, y, 40, bob_options);
        World.add(world, this.body);
      }
      display(){ 
        var pos = this.body.position;
        ellipseMode(RADIUS);
        
        fill("pink");
        ellipse(pos.x, pos.y, 40,40);
        
      }
}