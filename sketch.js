var box
function setup() {
  createCanvas(500,400);
    box = createSprite(200,200,30,30);
}

function draw(){
  background(30);

  if(keyDown(DOWN_ARROW)){
    box.y = box.y + 5;
  }


  drawSprites();

}




