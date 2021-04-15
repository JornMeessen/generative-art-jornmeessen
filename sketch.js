w = 1000

function setup() {
  createCanvas(w, w);
  background('#F9F8F4');
}

const is_in_circle = (x, y) => 
  (pow(w / 2 - x, 2) + pow(w / 2 - y, 2) < 7e4)

function draw() {
  if (is_in_circle(x = random(w), y = random(w)))
    while (is_in_circle(x, y)) {
      n = noise(x, y)
      x += sin(n * TAU)
      y += cos(n * TAU)
      point(x, y)
    }
}