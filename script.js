/**
 * Lab 7 - Text
 */
var x,w;

function setup() {
  createCanvas(640, 240);
  x = width/2;
  w= 100;

}

function draw() {
  background(200);

  x = width/2;
w = 100;
if(mouseIsPressed){ // true or false?
textFont("Verdana");
textSize(12);
  text("Your Momma", 20, 60);

}
else {

// check to condition of the mouse
  // if true, change 
 x = width/4;
 w = 50;
 textFont("Impact");
 textSize(45);
  text("Your Daddy", 20, 160);
  }

}
