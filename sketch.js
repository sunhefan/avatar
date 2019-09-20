let angleWag;
let mic;
let micLevel;

let angleTail = 5;
let bamYes = false;
let backgroundColor = ('#62CDD9');
let changeShape;

let star = [];
// let star1;
// let star2;
// let star3;
// let star4;




function setup() {

  createCanvas(400, 400);
  angleMode(DEGREES);


  for (let i = 0; i <= 15; i++) {

    star[i] = new Star(random(1, 10) * width * .1, random(1, 10) * width * .1, random(360), random(10) * .3); //star1
  }

  console.log(star);

  //   star[0] = new Star(width * .1, height * .2, 30, 2);    //star1

  //   star[1] = new Star(width * .25, height * .5, -20, .8);   //star2


  //    star[2] = new Star(width * .5, height * .3, 80, 1.5);   //star3


  //   star[3] = new Star(width * .8, height * .8, -50, 3);   //star4

  console.log(star);
  mic = new p5.AudioIn();
  mic.start();

}


function draw() {

  background(backgroundColor);
text("Hiiiiiiiiiii", 50,50);
  for (i = 0; i < star.length; i++) {
    star[i].display();
    star[i].move();

  }


  //   star[0].display();
  //   star[1].display();
  //   star[2].display();
  //   star[3].display();

  //   star[0].move();
  //   star[1].move();
  //   star[2].move();
  //   star[3].move();
  // console.log("mic level " + mic.getLevel());
  // console.log("mouse y is: " + mouseY);
  // console.log("mouse x is: " + mouseX);

  // angleWag = map( mouseX,0,400,350,375);

  micLevel = mic.getLevel(.8);
  angleWag = map(mic.getLevel(.8), 0, .2, 350, 360);

  //angleWag = mouseX;

  drawRabbitTail(angleTail);
  drawLeftEar(angleWag);
  drawRightEar(micLevel * 100);
  drawRabbitFace();
  drawRabbitFeet();
  drawRabbitBody();
  drawRabbitArms();

  drawRabbitEyes();
  drawPupils();
  drawRabbitMouth()

  drawCarrot(width * .80, height * .70, 30);
  //drawCarrot(width * .15, height * .6, -30);

  //rect(width * .3, constrain(micLevel*height*3, 0, height), 200, 30);


  if (mouseIsPressed) {
    fill(213, 38, 7);
    rect(width * .475, height * .525, width * .05, height * .05);
  } else {
    changeShape;
  }



  if (bamYes == true) {
    // fill('#F22233');
    //circle(width / 2, height / 1.3, 50);
    drawCarrot(width * .55, height * .65, -24);
  }


}



//right carrot
function mousePressed() {


  if (mouseX > width * .7 && mouseX < width * .95 && mouseY > height * .6 && mouseY < height * .9) {
    //console.log("mouse try");
    angleTail = -angleTail;
  } else if (mouseX < width * .6 || mouseX > width * 1) {
    bamYes = true;
    //console.log("try");
    backgroundColor = ('#F22233')
  }



  //right carrot
  if (mouseX > width * .7 && mouseX < width * .95 && mouseY > height * .6 && mouseY < height * .9) {
    //console.log("mouse try");
    backgroundColor = ('#3A758C');
  } else {
    backgroundColor = ('#62CDD9');
  }

}

function drawRabbitTail() {
  //rabbit tail
  fill(227, 175, 81);
  noStroke();
  push();
  beginShape();
  translate(width * .29, height * .75);
  rotate(angleTail);
  vertex(-width * .05, -height * .05);
  vertex(-width * .05, height * .04);
  vertex(width * .08, height * .03);
  vertex(width * .08, -height * .02);
  endShape(CLOSE);
  pop();

}


function drawLeftEar() {
  //rabbit left ear rotate
  fill(252, 199, 105);
  noStroke();
  push();
  translate(width * .45, height * .46);
  rotate(angleWag);
  //rotate(mouseX * - .05,angle);

  ellipse(0, width * -.22, width * .11, height * .44);

  fill(255);
  ellipse(0, width * -.20, width * .04, height * .35) //left white ear
  pop();



  // inside left ear
  // fill(255);
  // noStroke();
  // push();
  // translate(width * .438, height * .27);
  // rotate(-30);
  // ellipseMode(CENTER);
  // ellipse(0, 0, width * .04, height * .35);
  // pop();


}

function drawRightEar() {
  //right ear
  fill(252, 199, 105);
  noStroke();
  push();
  translate(width * .57, height * .45);
  // ellipse(width * .56, height * .25, width * .11, height * .44);
  rotate(angleWag);
  ellipse(0, width * -.22, width * .11, height * .44);

  fill(255);
  ellipse(0, width * -.22, width * .04, height * .35); // white ear
  pop();

  // ellipse(width * .56, height * .27, width * .04, height * .35);


}

function drawRabbitFace() {
  //rabbit head and beard
  fill(252, 199, 105);
  noStroke();
  ellipse(width * .5, height * .48, width * .28, width * .35);
  ellipse(width * .5, height * .53, width * .36, height * .20);

  stroke(118);
  line(width * .25, height * .5, width * .4, height * .5);
  line(width * .25, height * .6, width * .4, height * .55);
  line(width * .8, height * .5, width * .6, height * .5);
  line(width * .8, height * .6, width * .6, height * .55);
}

function drawRabbitFeet() {
  noStroke();
  fill(255);
  //ellipse(width * .35, height * .858, width * .18, height * .09);

  //ellipse(width * .66, height * .858, width * .18, height * .09);

  //let foot
  rect(width * .26, height * .8, width * .18, height * .1, 100, 100, 0, 100);
  rect(width * .57, height * .8, width * .18, height * .1, 0, 100, 100, 0);


  //left foot
  stroke(80);
  line(width * .265, height * .83, width * .3, height * .83);
  line(width * .261, height * .85, width * .3, height * .85);
  line(width * .265, height * .87, width * .3, height * .87);

  //right foot
  line(width * .745, height * .83, width * .71, height * .83);
  line(width * .748, height * .85, width * .71, height * .85);
  line(width * .745, height * .87, width * .71, height * .87);

}

function drawRabbitBody() {



  //rabbit body
  noStroke();
  fill(252, 199, 105, );
  beginShape();
  vertex(width * .4, height * .6);
  vertex(width * .6, height * .6);
  vertex(width * .67, height * .8);
  vertex(width * .6, height * .9);
  vertex(width * .4, height * .9);
  vertex(width * .355, height * .8);
  endShape(CLOSE);
}

function drawRabbitArms() {

  //rabbit left arm
  fill(255);

  push();
  translate(width * .39, height * .70);
  rotate(-20);
  rect(0, 0, width * .07, height * .11, 0, 0, 30, 30);
  pop();


  // rabbit right arm
  push();
  translate(width * .55, height * .68);
  rotate(20);
  rect(0, 0, width * .07, height * .11, 0, 0, 30, 30);
  pop();


}



function drawRabbitEyes() {
  //rabbit eyes
  fill(55);
  noStroke();
  ellipse(width * .45, height * .45, width * .050, height * .06);
  ellipse(width * .55, height * .45, width * .050, height * .06);



}

function drawPupils() {

  fill(255);
  circle(width * .45, width * .45, width * .025);
  circle(width * .55, width * .45, width * .025);
}

function drawRabbitMouth() {

  //rabbit mouth
  //stroke(50);
  //strokeWeight(2);

  //noFill();

  //arc(width * .45, height * .51, 39, 25, 0, HALF_PI);
  //arc(width * .55, height * .51, 39, 25, HALF_PI, PI);
  fill(247, 132, 120);


  arc(width * .50, height * .55, width * .050, height * .050, 05, PI + QUARTER_PI, CHORD);
}

function drawCarrot(xPos, yPos, rotation) {
  //draw carrot
  fill(245, 122, 36);
  noStroke()

  push();
  translate(xPos, yPos);
  rotate(-rotation);
  beginShape();
  vertex(-width * .05, 0, );
  vertex(width * .05, 0);
  vertex(0, height * .25);
  endShape(CLOSE);



  //carrot's leaf
  fill(67, 173, 54);
  beginShape();

  vertex(-width * .05, 0);
  vertex(-width * .07, -height * .08);
  vertex(-width * .03, -height * .03);
  vertex(-width * .02, -height * .08);
  vertex(0, -height * .025);
  vertex(width * .02, -height * .08);
  vertex(width * .03, -height * .03);
  vertex(width * .07, -height * .08);
  vertex(width * .05, 0);
  endShape(CLOSE);
  pop();

  // vertex(width * .8, height * .3);
  // vertex(width * .78, height * .22);
  // vertex(width * .82, height * .25);
  // vertex(width * .84, height * .2);
  // vertex(width * .86, height * .25);
  // vertex(width * .88, height * .2);
  // vertex(width * .89, height * .25);
  // vertex(width * .93, height * .22);
  // vertex(width * .9, height * .3);

}
