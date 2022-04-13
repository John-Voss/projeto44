//imagens
var backgroundImage;
//banco de dados
var database;
//objetos e controle
var game, form, player, allPlayers, playerCount;
var gameState = 0;
//sprites
var background_rect;
var florest, ocean, desert, pole;
//tema
var theme1_img, theme2_img, theme3_img, theme4_img;
var theme = theme3_img;
var gameTheme = 3;
//soluções
var solution = {};

function preload() {
  backgroundImage = loadImage("assets/planodefundo.png");
  theme1_img = loadImage('assets/planodefundoFloresta1.webp');
  theme2_img = loadImage('assets/planodefundoDeserto1.jpg');
  theme3_img = loadImage('assets/planodefundoPoloNorte1.webp');
  theme4_img = loadImage('assets/planodefundoOceano1.webp');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();//creating the object game
  //game.getState();//loading gameState
  game.start();//creating start

  //o background
  background_rect = createSprite(width/2 + 350, height/2, 100, 100);
  background_rect.addImage('back_img', backgroundImage);
  background_rect.scale = 1.1;
}

function draw() {
  background('#008B8B');
  if(gameState === 1) {
    game.play();
  }
  drawSprites();
} 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
