class Ball {
  constructor(startingAngle, shiftingAngle){
    this.angle =0;
    this.startingAngle = startingAngle;
    this.shiftingAngle = shiftingAngle;
  }
  
  update(){
    this.angle += 1;
  }
  
  display(){
     push()
    blendMode(EXCLUSION)
  this.x = r*cos(this.startingAngle + this.angle + this.shiftingAngle);
  rotate(-this.shiftingAngle);
   fill("pink")
    noStroke()
  line(-r,0,r,0);
    noStroke()
  ellipse(this.x,0,20,20);
  pop()
  }
}