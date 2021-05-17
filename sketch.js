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

  var SpeechRec = [];
   let pword = ""


  p.setup = function() {
    var cnv = p.createCanvas(1200, 550);
    var x = (p.windowWidth - 1200) / 2;
    var y = (p.windowHeight - 550) / 2;
    cnv.position(x, y);
    p.background('#504742');

    SpeechRec = new p5.SpeechRec();

    SpeechRec.continuous = true;
   SpeechRec.interimResults = true;

    SpeechRec.start()
    SpeechRec.onResult = p.showResult;
    SpeechRec.onStart = p.onStart;

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
    p.fill(100, overlayAlpha);
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
    if (p.key == 'w') agentCount = agentCount - 300;
    if (p.key == 'f') agentCount = agentCount + 1000;
   
    if (p.key == 'p') {
      var newNoiseSeed = p.floor(p.random(10000));
      p.noiseSeed(newNoiseSeed);
    }
    if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(255);

  };

  p.onStart = function(){
    pword = SpeechRec.resultString
  }

  p.showResult = function(){
  if(SpeechRec.resultConfidence < 0.009 || pword == SpeechRec.resultString){
    return 0
  }
  pword = SpeechRec.resultString;
  switch(SpeechRec.resultString){
    case "opslaan":
      p.saveCanvas('gd.timestamp()', 'png');
      console.log('opslaan');
      break
    case "lijnen":
      drawMode = 1;
      console.log('drawMode 1 lijnen');
      break
    case "recht":
      drawMode = 2;
      console.log('drawMode 2 - recht');
      break
    case "opnieuw":
      p.background(255);
      console.log('opnieuw');
      break
     case "minder":
      agentCount = agentCount - 500;
      console.log('minder ' + agentCount);
      break
      case "meer":
      if(agentCount < 4000){
        agentCount = agentCount + 500;
        console.log('meer ' + agentCount);
      } else {
        console.log('limiet is bereikt ' + agentCount);
      }
      break
      case "verander":
       var newNoiseSeed = p.floor(p.random(10000));
      p.noiseSeed(newNoiseSeed);
       console.log('verander ' + newNoiseSeed);
      break
      case "kleur":
      red =  /*255 */ Math.floor(p.random(0, 254) + 1);
      green = /*255 */ Math.floor(p.random(0, 254) + 1);
      blue = /*255 */ Math.floor(p.random(0, 254) + 1);

      p.stroke(red, green, blue);
      
      console.log('kleur ' + red + ' ' + green + ' ' + blue)
      break 
  }
}

   console.log(p); 

};

var myp5 = new p5(sketch);


