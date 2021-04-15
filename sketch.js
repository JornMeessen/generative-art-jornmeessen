const size = 1000

function setup() {
  createCanvas(size, size);
  background('#F9F8F4');
}

function draw() {
  x = random(size)
  y = random(size)
  if (pow(size/2 - x, 2) + pow(size/2 - y, 2) < 7e4) {
    point(x,y)
  }
}