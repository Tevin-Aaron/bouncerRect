var r,m;

function setup() {
  createCanvas(1200,800);
  r = createSprite(400, 100, 50, 80);
  r.velocityY = 2;
  m = createSprite(400,800,80,30);
  m.velocityY = -2;
}

function draw() {
  background(255,255,255);  
  r.shapeColor = "yellow";
  m.shapeColor = "yellow";

  r.debug = true;
  m.debug = true;

  if(m.y - r.y < m.height/2 + r.height/2 && r.y - m.y < m.height/2 + r.height/2 ){
r.velocityY = r.velocityY * (-1);
m.velocityY = m.velocityY * (-1);

  }

  if(m.x - r.x < m.width/2 + r.width/2 && r.x - m.x < m.width/2 + r.width/2 ){
r.velocityX = r.velocityX * (-1);
m.velocityX = m.velocityX * (-1);
    
  }
    

  drawSprites();
}