
///  Program flow

// setup is run ONCE per program, at the begining.  which is why it lives at the top
function setup() {
  createCanvas(400,300)
  background(0)  // by moving backg4round into setup, it's only drawn once.  so now the circle in the draw function acts as a paintbrush

}

//  draw is a forever loop, but it still run in order.  

function draw() {
  

  noStroke()  /// the color changing functions must be defined before the shape function
  fill(255)

  // mouseX and mouseY are built in variables that are the cursor position relative to the canvas 0,0
  circle(mouseX,mouseY,20)
}

function mousePressed() {  // another built in function, mouse click event listener
  background(0)   // if background is called in a mousePressed, then it will redrew the background, effectively erasing the canvas
}