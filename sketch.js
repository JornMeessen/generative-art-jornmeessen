 'use strict';

var sketch = function(p) {
  var agents = [];
  var agentCount = 4000;  //4000
  var noiseScale = 300;   //300
  var noiseStrength = 10;   //10
  var overlayAlpha = 4;   //10
  var agentAlpha = 1000;    //90
  var strokeWidth = 1.0;  //0.3
  var drawMode = 1;   //1

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);

    for (var i = 0; i < agentCount; i++) {
      agents[i] = new Agent();
    }
  };


    let red =  /*255 */ Math.floor(p.random(0, 254) + 1);
    let green = /*255 */ Math.floor(p.random(0, 254) + 1);
    let blue = /*255 */ Math.floor(p.random(0, 254) + 1);

    console.log("red " + red );
    console.log("green " + green );
    console.log("blue " + blue );


  p.draw = function() {
    p.fill(0, overlayAlpha);
    p.noStroke();
    p.rect(0, 0, p.width, p.height);

    // Draw agents
    p.stroke(red, green, blue); //agentAlpha
    
    for (var i = 0; i < agentCount; i++) {
      if (drawMode == 1) agents[i].update1(noiseScale, noiseStrength, strokeWidth);
      else agents[i].update2(noiseScale, noiseStrength, strokeWidth);
    }
  };

  p.keyReleased = function() {
    if (p.key == 's' || p.key == 'S') p.saveCanvas('gd.timestamp()', 'png');
    if (p.key == '1') drawMode = 1;
    if (p.key == '2') drawMode = 2;
    //if (p.key == 'w') agentCount = agentCount - 1000;
    //if (p.key == 'f') agentCount = agentCount + 1000;
   
    // if (p.key == 'p') {
    //   var newNoiseSeed = p.floor(p.random(10000));
    //   p.noiseSeed(newNoiseSeed);
    // }
    if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(255);

  };

   console.log(p); 

};

var myp5 = new p5(sketch);


