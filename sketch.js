var shooterimg,shooting_img,bgimg
var bg,player
var zombie_img,zombieGroup
function preload(){
shooterimg=loadImage("assets/shooter_2.png")
shooting_img=loadImage("assets/shooter_3.png")
bgimg=loadImage("assets/bg.jpeg")
zombie_img=loadImage("assets/zombie.png")
}
function setup() {
  createCanvas (windowWidth,windowHeight)
  bg=createSprite(displayWidth/2-20,displayHeight-40,20,20)
  bg.addImage(bgimg)
  bg.scale=1.1

  player=createSprite(displayWidth-1150,displayHeight-300,50,50)
  player.addImage(shooterimg)
  player.scale=0.3
  zombieGroup=createGroup()
}
function draw(){
  background(0)
  if(keyDown("DOWN_ARROW")||touches.length>0){
    player.y=player.y+30
  }
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y=player.y-30

  }
  if(keyDown("LEFT_ARROW")){
    player.x=player.x-30
  }
  if(keyDown("RIGHT_ARROW")){
    player.x=player.x+30
  }
  if(keyWentDown("space")){player.addImage(shooterimg)}
  else if(keyWentUp("space")){player.addImage(shooting_img)}
enemy()
if(zombieGroup.isTouching(player)){
  for(var i=0;i<zombieGroup.length;i++){
    if(zombieGroup[i].isTouching(player)){
      zombieGroup[i].destroy()
    }
    
    
  }
}
  drawSprites()
}
function enemy(){
  if(frameCount%80===0){
zombie=createSprite(random(500,1100),random(100,500,40,40))
zombie.addImage(zombie_img)
zombie.velocityX=-6
zombie.scale=0.3
zombie.lifetime=400
zombieGroup.add(zombie)

}}