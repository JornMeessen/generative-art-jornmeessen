
const size = 1000

function setup() {
  createCanvas(size, size);
  background('#F9F8F4');
}

const artwork = (x, y) =>
	
	
  (pow(size / 2 - x, 2) + pow(size / 2 - y, 2) < 7e4)



function draw() {
  if (artwork(x = random(size), y = random(size)))
    while (artwork(x, y) && random() > 0.01) {
      richting = noise(x / 500, y / 500)
      x += sin(richting * TAU)
      y += cos(richting * TAU)
      stroke(0, 0, 0);
      circle(x, y, .8)
    }
}


// no artwork 

// function draw() {
//   if (x = random(size), y = random(size))
//     while ( random() > 0.01) {
//       n = noise(x / 500, y / 500)
//       x += sin(n * TAU)
//       y += cos(n * TAU)
//       circle(x, y, .8)
//     }
// }
