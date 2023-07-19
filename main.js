let x;
let y;
let radius;
let angle;
 
function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  ellipseMode(CENTER);
  setStart(120, 120);
}
 
function draw() {
    translate(width / 2, height / 2);
    angle += 0.02;
    radius -= 0.1;
    if(radius < 0)
        radius = 0;
    x = sin(angle) * radius;
    y = cos(angle) * radius;
    stroke(255,0,0,10);
    fill(255,255,255,.03);
    ellipse(x, y, x*2, y*2);
}
 
function setStart(x,y) {
    angle = atan2(x - width / 2, y - height / 2);
    radius = dist(width / 2, height / 2, x, y);
    this.x = x;
    this.y = y;
}