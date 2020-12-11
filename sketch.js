var bullet,wall; 
var speed,weight;  
var  thickness; 
function setup() { 
  thickness=random(22,83)
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  speed= random(223,321);
  wall= createSprite(1200,200, thickness,height/2);
  weight=random(30,52); 
  bullet.VelocityX = speed;
}

function draw() { 
if(hasCollided(bullet,wall)) 
{ 
  bullet.VelocityX=0; 
  var deformation=0.5 * weight * speed* speed/(thickness *thickness *thickness ); 
  if(damage>10) 
  { 
    wall.shapeColor=color(255,0,0);
  } 
  if(deformation<10 ) 
  { 
    wall.shapeColor=color(0,255,0);
  } 
  
}
  background(0,0,0);  
  drawSprites();
} 
function hasCollided(lbullet, waLL) 
{ 
  bulletRightEdge=lbullet.x +lbullet.width; 
  wallLeftEdge=wall.x; 
  if (bulletRightEdge>=wallLeftEdge) 
  { 
    return true
  } 
  return false;
} 
