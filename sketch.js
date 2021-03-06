var player, pImg1, pImg2, pImg3, pImg4, pImg5, pImg6;
var lava, lavaImg;
var ground, ground2, ground3, ground4, ground5, ground6, ground7, ground8;
var ground9,
  ground10,
  ground11,
  ground12,
  ground13,
  ground14,
  ground15,
  ground16;
var gameState = "start";
var playAgain, rpImg;
var trap, trap2, trap3, trap4, trap5, trap6, trap7, trap8, trap9, trap10;
var dart, dart2, dart3, dart4, dart5, dart6, dart7, dart8, dart9, dart10;
var groundImg;
var box1,
  box2,
  box3,
  box4,
  box5,
  box6,
  box7,
  box8,
  box9,
  box10,
  box11,
  box12,
  box13;
var sword;
var boss,
  fakeBoss,
  health = 100;
var fireball;

function preload() {
  pImg1 = loadImage("images/tile000.png");
  pImg2 = loadImage("images/tile001.png");
  pImg3 = loadImage("images/tile002.png");
  pImg4 = loadImage("images/tile003.png");
  pImg5 = loadImage("images/tile004.png");
  pImg6 = loadImage("images/tile005.png");
  lavaImg = loadImage("images/lava.jpg");
  groundImg = loadImage("images/ground.png");
  rpImg = loadImage("images/Respawn.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight - 140);
  boss = createSprite(15960, 400, 400, 600);
  fakeBoss = createSprite(15960, 400, 400, 600);
  fakeBoss.setCollider("rectangle", -600, 0, 650, 600);
  fireball = createSprite(boss.x, boss.y - 100, 50, 50);
  player = createSprite(15000, 350, 20, 50);
  player.addImage(pImg1);
  player.scale = 0.25;
  player.setCollider("rectangle", 50, 50, 200, 300);
  sword = createSprite(player.x + 30, player.y - 60, 10, 40);
  sword.visible = false;

  ground = createSprite(150, 370, 800, 20);
  ground2 = createSprite(1200, 370, 800, 20);
  ground3 = createSprite(2200, 370, 800, 20);
  ground4 = createSprite(3200, 370, 800, 20);
  ground5 = createSprite(4200, 370, 800, 20);
  ground6 = createSprite(5200, 370, 800, 20);
  ground7 = createSprite(6200, 370, 800, 20);
  ground8 = createSprite(7200, 370, 800, 20);
  ground9 = createSprite(8200, 370, 800, 20);
  ground10 = createSprite(9200, 370, 800, 20);
  ground11 = createSprite(10200, 370, 800, 20);
  ground12 = createSprite(11200, 370, 800, 20);
  ground13 = createSprite(12200, 370, 800, 20);
  ground14 = createSprite(13200, 370, 800, 20);
  ground15 = createSprite(14200, 370, 800, 20);
  ground16 = createSprite(15200, 370, 800, 20);

  ground.addImage(groundImg);
  ground2.addImage(groundImg);
  ground3.addImage(groundImg);
  ground4.addImage(groundImg);
  ground5.addImage(groundImg);
  ground6.addImage(groundImg);
  ground7.addImage(groundImg);
  ground8.addImage(groundImg);
  ground9.addImage(groundImg);
  ground10.addImage(groundImg);
  ground11.addImage(groundImg);
  ground12.addImage(groundImg);
  ground13.addImage(groundImg);
  ground14.addImage(groundImg);
  ground15.addImage(groundImg);
  ground16.addImage(groundImg);

  ground.scale = 0.3;
  ground2.scale = 0.35;
  ground3.scale = 0.3;
  ground4.scale = 0.3;
  ground5.scale = 0.3;
  ground6.scale = 0.3;
  ground7.scale = 0.3;
  ground8.scale = 0.3;
  ground9.scale = 0.3;
  ground10.scale = 0.3;
  ground11.scale = 0.3;
  ground12.scale = 0.3;
  ground13.scale = 0.3;
  ground14.scale = 0.3;
  ground15.scale = 0.3;
  ground16.scale = 0.3;

  trap = createSprite(800, 330, 50, 50);
  trap2 = createSprite(1800, 330, 50, 50);
  trap3 = createSprite(3200, 330, 50, 50);
  trap4 = createSprite(4550, 330, 50, 50);
  trap5 = createSprite(5600, 330, 50, 50);
  trap6 = createSprite(7050, 330, 50, 50);
  trap7 = createSprite(8200, 330, 50, 50);
  trap8 = createSprite(9600, 330, 50, 50);
  trap9 = createSprite(11000, 330, 50, 50);
  trap10 = createSprite(12600, 330, 50, 50);

  trap.shapeColor = "red";
  trap2.shapeColor = "red";
  trap3.shapeColor = "red";
  trap4.shapeColor = "red";
  trap5.shapeColor = "red";
  trap6.shapeColor = "red";
  trap7.shapeColor = "red";
  trap8.shapeColor = "red";
  trap9.shapeColor = "red";
  trap10.shapeColor = "red";

  trap.setCollider("rectangle", -300, 0, 500, 100);
  trap2.setCollider("rectangle", -300, 0, 500, 100);
  trap3.setCollider("rectangle", -300, 0, 500, 100);
  trap4.setCollider("rectangle", -300, 0, 500, 100);
  trap5.setCollider("rectangle", -300, 0, 500, 100);
  trap6.setCollider("rectangle", -300, 0, 500, 100);
  trap7.setCollider("rectangle", -300, 0, 500, 100);
  trap8.setCollider("rectangle", -300, 0, 500, 100);
  trap9.setCollider("rectangle", -300, 0, 500, 100);
  trap10.setCollider("rectangle", -300, 0, 500, 100);

  dart = createSprite(trap.x, 330, 10, 4);
  dart2 = createSprite(trap2.x, 330, 10, 4);
  dart3 = createSprite(trap3.x, 330, 10, 4);
  dart4 = createSprite(trap4.x, 330, 10, 4);
  dart5 = createSprite(trap5.x, 330, 10, 4);
  dart6 = createSprite(trap6.x, 330, 10, 4);
  dart7 = createSprite(trap7.x, 330, 10, 4);
  dart8 = createSprite(trap8.x, 330, 10, 4);
  dart9 = createSprite(trap9.x, 330, 10, 4);
  dart10 = createSprite(trap10.x, 330, 10, 4);

  box1 = createSprite(2700, 420, 50, 50);
  box2 = createSprite(4200, 330, 50, 50);
  box3 = createSprite(4500, 330, 50, 50);
  box4 = createSprite(5000, 300, 50, 50);
  box5 = createSprite(5400, 330, 50, 50);
  box6 = createSprite(6600, 300, 50, 50);
  box7 = createSprite(6900, 330, 50, 50);
  box8 = createSprite(7700, 300, 50, 50);
  box9 = createSprite(8100, 260, 50, 50);
  box10 = createSprite(8500, 250, 50, 50);
  box11 = createSprite(8900, 240, 50, 50);
  box12 = createSprite(9300, 240, 50, 50);
  box13 = createSprite(12500, 330, 50, 50);

  box1.shapeColor = "green";
  box2.shapeColor = "green";
  box3.shapeColor = "green";
  box4.shapeColor = "green";
  box5.shapeColor = "green";
  box6.shapeColor = "green";
  box7.shapeColor = "green";
  box8.shapeColor = "green";
  box9.shapeColor = "green";
  box10.shapeColor = "green";
  box11.shapeColor = "green";
  box12.shapeColor = "green";
  box13.shapeColor = "green";

  dart.shapeColor = "green";
  dart2.shapeColor = "green";
  dart3.shapeColor = "green";
  dart4.shapeColor = "green";
  dart5.shapeColor = "green";
  dart6.shapeColor = "green";
  dart7.shapeColor = "green";
  dart8.shapeColor = "green";
  dart9.shapeColor = "green";
  dart10.shapeColor = "green";
  playAgain = createSprite(player.x + 160, 150, 100, 50);
  playAgain.addImage(rpImg);
  playAgain.scale = 0.44;

  lava = createSprite(displayWidth / 2 + 600, 750, 3200, 240);
  lava.addImage(lavaImg);
  lava.scale = 1.5;

  ground14.velocityX = 6;
  ground15.velocityX = -6;
}

function draw() {
  background(255, 255, 255);
  camera.position.x = player.x + 300;

  player.velocityY = player.velocityY + 0.5;
  player.collide(ground);
  player.collide(ground2);
  player.collide(ground3);
  player.collide(ground4);
  player.collide(ground5);
  player.collide(ground6);
  player.collide(ground7);
  player.collide(ground8);
  player.collide(ground9);
  player.collide(ground10);
  player.collide(ground11);
  player.collide(ground12);
  player.collide(ground13);
  player.collide(ground14);
  player.collide(ground15);
  player.collide(ground16);

  lava.x = player.x + 220;

  if(frameCount%20===0){
    ground14.velocityX = ground14.velocityX*-1;
    ground15.velocityX = ground15.velocityX*-1;
  }

  if (gameState === "start") {
    playAgain.visible = false;
    if (keyDown("o")) {
      player.y = 100;
      player.velocityY = 11;
      if (keyDown("d")) {
        player.velocityX = 24;
      }
      if (keyDown("a")) {
        player.velocityX = -19;
      }
    }
    if (keyDown("Right_ARROW")) {
      player.velocityX = 9;
    }
    if (keyDown("Left_ARROW")) {
      player.velocityX = -9;
    }

    if (keyDown("space") && player.y >= 310 && player.y <= 330) {
      player.velocityY = -11;
    }
    if (
      player.collide(box1) ||
      player.collide(box2) ||
      player.collide(box3) ||
      player.collide(box4) ||
      player.collide(box5) ||
      player.collide(box6) ||
      player.collide(box7) ||
      player.collide(box8) ||
      player.collide(box9) ||
      player.collide(box10) ||
      player.collide(box11) ||
      player.collide(box12) ||
      player.collide(box13)
    ) {
      if (keyDown("space")) {
        player.velocityY = -11;
      }
    }
    player.collide(box1);
    player.collide(box2);
    player.collide(box3);
    player.collide(box4);
    player.collide(box5);
    player.collide(box6);
    player.collide(box7);
    player.collide(box8);
    player.collide(box9);
 
   

    if (player.isTouching(lava)) {
      gameState = "end";
    }
    if (player.isTouching(trap)) {
      dart.velocityX = -15;
    }
    if (player.isTouching(trap2)) {
      dart2.velocityX = -15;
    }
    if (player.isTouching(trap3)) {
      dart3.velocityX = -15;
    }
    if (player.isTouching(trap4)) {
      dart4.velocityX = -15;
    }
    if (player.isTouching(trap5)) {
      dart5.velocityX = -15;
    }
    if (player.isTouching(trap6)) {
      dart6.velocityX = -15;
    }
    if (player.isTouching(trap7)) {
      dart7.velocityX = -15;
    }
    if (player.isTouching(trap8)) {
      dart8.velocityX = -15;
    }
    if (player.isTouching(trap9)) {
      dart9.velocityX = -15;
    }
    if (player.isTouching(trap10)) {
      dart10.velocityX = -15;
    }

    if (dart.x < player.x - 600) {
      dart.x = trap.x;
      dart.velocityX = 0;
    }
    if (dart2.x < player.x - 600) {
      dart2.x = trap2.x;
      dart2.velocityX = 0;
    }
    if (dart3.x < player.x - 600) {
      dart3.x = trap3.x;
      dart3.velocityX = 0;
    }
    if (dart4.x < player.x - 600) {
      dart4.x = trap4.x;
      dart4.velocityX = 0;
    }
    if (dart5.x < player.x - 600) {
      dart5.x = trap5.x;
      dart5.velocityX = 0;
    }
    if (dart6.x < player.x - 600) {
      dart6.x = trap6.x;
      dart6.velocityX = 0;
    }
    if (dart7.x < player.x - 600) {
      dart7.x = trap7.x;
      dart7.velocityX = 0;
    }
    if (dart8.x < player.x - 600) {
      dart8.x = trap8.x;
      dart8.velocityX = 0;
    }
    if (dart9.x < player.x - 600) {
      dart9.x = trap9.x;
      dart9.velocityX = 0;
    }
    if (dart10.x < player.x - 600) {
      dart10.x = trap10.x;
      dart10.velocityX = 0;
    }

    if (player.collide(boss)) {
      var rand = Math.round(random(1, 3));
      if (rand === 1) {
        health = health - 7;
      } else if (rand === 2) {
        health = health - 10;
      } else if (rand === 3) {
        health = health - 13;
      }
    }
    if (health <= 0) {
      health = 0;
    }

    if (health <= 0) {
      boss.velocityY = 6;
      fakeBoss.velocityY = 6;
      fireball.velocityX = 0;
      fireball.velocityY = 6;
      textSize(36);
      text("You Won!", player.x + 300, 150);
    }

    textSize(32);
    text(health, boss.x, boss.y - 350);
    if (player.isTouching(fakeBoss) && frameCount % 15 === 0) {
      fireball.velocityX = -18;
    }
    if (fireball.x <= player.x - 700) {
      fireball.x = boss.x;
      fireball.velocityX = 0;
      fireball.y = random(180, 251);
    }
    if ((player.isTouching(fireball))||((player.x>14000) && (player.isTouching(lava)))) {
      gameState = "mid";
    }

    if (
      dart.isTouching(player) ||
      dart2.isTouching(player) ||
      dart3.isTouching(player) ||
      dart4.isTouching(player) ||
      dart5.isTouching(player) ||
      dart6.isTouching(player) ||
      dart7.isTouching(player) ||
      dart8.isTouching(player) ||
      dart9.isTouching(player) ||
      dart10.isTouching(player)
    ) {
      gameState = "end";
    }
  }
  if(gameState==="mid"){
player.x = 10000
player.velocityX = 0;
player.y = 310
gameState ="start"
console.log(gameState)
  }
  if (gameState === "end") {
    box1.velocityX = 0;
    box1.x = 2700;
    player.velocityY = 0;
    player.velocityX = 0;
    lava.velocityX = 0;
    fireball.x = boss.x;
    fireball.velocityX = 0;
    fireball.y = random(200, 300);
    health = 100;
    textSize(32);
    text("Game Over!", player.x + 180, 100);
    playAgain.x = player.x + 260;
    playAgain.visible = true;
    if (mousePressedOver(playAgain)) {
      gameState = "start";
      player.x = 100;
      player.y = 350;
      dart.x = 800;
      dart2.x = 800;
      dart3.x = 800;
      dart4.x = 800;
      dart5.x = 800;
      dart6.x = 800;
      dart7.x = 800;
      dart8.x = 800;
      dart9.x = 800;
      dart10.x = 800;

      dart.velocityX = 0;
      dart2.velocityX = 0;
      dart3.velocityX = 0;
      dart4.velocityX = 0;
      dart5.velocityX = 0;
      dart6.velocityX = 0;
      dart7.velocityX = 0;
      dart8.velocityX = 0;
      dart9.velocityX = 0;
      dart10.velocityX = 0;
      ground14.velocityX = 6;
  ground15.velocityX = -6;
    }
  }

  drawSprites();
}
function spawnObstacles() {
  var obstacles = createSprite(runner.x + 1000, 300, 20, 50);
}
