class Ball {
    constructor(x, y, width) {
      var options = {
          'restitution':1,
          'friction':1,
          'density':1,
          'frictionAir': 0,
      }
     this.body={{pos.x,pos.y}}
      this.width = width;

      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      stroke("white");
      ellipseMode(RADIUS);
      strokeWeight(4);
      fill(100, 100, 100);
      ellipse(0, 0, this.width);
      keyPressed();
      pop();
    }
  };
  
