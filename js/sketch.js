var heKnelt;

function setup(){
  createCanvas(500, 500, WEBGL);

  heKnelt = loadModel('3dModels/heknelt.obj', true);

}


function draw(){
  background(210);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  model(heKnelt);

}