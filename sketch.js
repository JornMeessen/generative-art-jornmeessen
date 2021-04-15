w = 1000

function setup() {
  createCanvas(w, w);
  background('#F9F8F4');
}

function draw() {
  x = random(w)
  y = random(w)
  if (pow(w/2 - x, 2) + pow(w/2 - y, 2) < 7e4) {
    point(x,y)
  }
}