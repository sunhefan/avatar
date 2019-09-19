class Star {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;

  }

  display() {
    //set star color
     noStroke();
    fill(232, 220, 34,);
   

    //draw star and roate
    push();
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    scale(this.size);
    beginShape();
    vertex(0, height * .05);
    vertex(width * .03, -height * .05);
    vertex(-width * .05, height * .01);
    vertex(width * .05, height * .01);
    vertex(-width * .03, -height * .05);
    endShape(CLOSE);
    pop();
  }


move(){
  //below is shorthand for this.angle = this.angle + 1
  this.rotation+=3;
  
  if (this.yPos <= height* 1.1){
//this.yPos = this.yPos + 2;
  //shorthand below is +=
  this.yPos += 2;
  }else if (this.yPos >height){
  
    this.yPos = -height* .06;
  }
}
  
  

}
// function drawStar(xPos, yPos, rotation) {

//set star color
// fill(232, 220, 34);
// nostroke();

//draw star and roate
//   push();
//   translate(xPos, yPos);
//   rotate(-rotation);
//   beginShape();
//   vertex(0, height * .05);
//   vertex(width * .03, -height * .05);
//   vertex(-width * .05, height * .01);
//   vertex(width * .05, height * .01);
//   vertex(-width * .03, -height * .05);
//   endShape(CLOSE);
//   pop();

// vertex(width * .15, height *.1);
// vertex(width * .18, height *.2);
// vertex(width * .1, height *.14);
// vertex(width * .2, height *.14);
// vertex(width * .12, height *.2);


//}