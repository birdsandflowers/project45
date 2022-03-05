var gameState = "start";

function preload() {
  junglebackgroundimg = loadImage("junglebackground.jpg");
  jungleplayimg = loadImage("playjungle.webp")

}

function setup() {
  createCanvas(1000, 1000);

  junglebackground = createSprite(500, 500, 400, 20);
  junglebackground.addImage("jungle.jpg", jungleplayimg);
  junglebackground.scale = 2
  junglebackground.visible = false


}

function draw() {

  if (gameState === "start") {
    background(junglebackgroundimg);
  }

  if (gameState === "play") {
    junglebackground.visible = true;
  }

  if (gameState === "end") {
    background("green")
  }

  drawSprites();
}

function mouseClicked() {
  if (gameState === "start") {
    gameState = "play"
  }
}