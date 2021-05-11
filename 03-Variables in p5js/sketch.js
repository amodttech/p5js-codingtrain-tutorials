
///  Program flow

// setup is run ONCE per program, at the begining.  which is why it lives at the top
function setup() {
  createCanvas(400,300)
}

//  draw is a forever loop, but it still run in order.  

function draw() {
  background(0)

  noStroke()  /// the color changing functions must be defined before the shape function
  fill(255)
  ellipse(200,150,75,75)
}