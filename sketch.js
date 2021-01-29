var gamestate=0;
let form;
var backgroundImg;
var database;

function preload() {
button = loadImage("button.png");
backgroundImg = loadImage("background.png");
wallpaper = loadImage("OIP.jpg");
}
function setup() {
  canves = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
 game= new Game();
 
  
  wall=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
wall.addImage(wallpaper);
wall.scale=3;

button1=createSprite(windowWidth/2,windowHeight/2+250,50,50);
button1.addImage(button);
button1.scale=0.15


}

function draw() {
  
  
  background(backgroundImg); 
  //backgroundImg.scale=windowWidth,windowHeight;
  //form.show();
  game.start(); 
 game.play();

drawSprites();
}
