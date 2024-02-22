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

  // check to condition of the mouse
if(mouseIsPressed){ // true or false?
  // if true, change 
 x = width/2;
 w = 50;
 textFont("Impact");
 textSize(45);
  text("Your Daddy", 20, 160);

}
else {

// otherwise do this:
x = width/2;
w = 100;
textFont("Verdana");
textSize(12);
  text("Your Momma", 20, 60);
  }

}
