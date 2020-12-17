const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint
const Constraint = Matter.Constraint;

 var world,engine;
var logo,logoimg,playb,playbimg,bg,bgimg;
var line1,line2,line3,line4,line5,line1i,line2i,line3i,line4i,line5i;
var background1,background1img,background2,background2img;
var switchButton,switchButtonimg;
var ribbon,ribbonimg
var face,stomach;
var rope1,rope2,rope3,rope4,rope5;
var faceimg,stomachimg;
var PLAY=2
var SERVE1=1
var SERVE2=0
var gameState=0
function preload(){
logoimg=loadImage("gamename.png")
bgimg=loadImage("zombie background.png")
playbimg=loadImage("button.png")
//switchButtonimg=loadImage("switcharrow.png")
ribbonimg=loadImage("redribbon.png")
// loding img of lines
line1i=loadImage("line1.png")
line2i=loadImage("line2.png")
line3i=loadImage("line3.png")
line4i=loadImage("line4.png")
line5i=loadImage("line5.png")
// state 2 backgrounds
background1img=loadImage("state2background.png")
background2img=loadImage("day background.png")
//body parts
faceimg=loadImage("face1.png")
stomachimg=loadImage("stomach.png")
}
function setup() {
  engine = Engine.create();
	world = engine.world;
  createCanvas(displayWidth,displayHeight);
  // ribbon
  ribbon=createSprite(displayWidth/2,displayHeight/2)
  ribbon.addImage(ribbonimg)
  ribbon.visible=true
  ribbon.scale=1
  //creating bg
  bg=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  bg.addImage(bgimg)
  bg.scale=1.5
  // creating state 2 backgrounds (night)
  background1=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  background1.addImage(background1img)
  background1.visible=false
  background1.scale=3
 //(day)
 background2=createSprite(displayWidth/2,displayHeight/2-100,displayWidth,displayHeight)
 background2.addImage(background2img)
 background2.visible=false
 background2.scale=1.8
  // creating the game's name
  
  logo=createSprite(displayWidth/2,displayHeight/2,800,800)
  push ()
  image(logoimg,0,0)
  
  tint (255,126)
 logo.addImage(logoimg)
  logo.visible=false
  logo.lifetime=150;
  pop ()
  //logo.addImage(logoimg)
 
 

 logo.visible=false
 
// play button
playb=createSprite(width/2,displayHeight/2+200,400,400)
playb.addImage(playbimg)
playb.visible=false;
 //creating text lines (1)
 line1=createSprite(displayWidth/2-10,displayHeight/2-300,400,30)
 line1.addImage(line1i)
 line1.visible=false
 line1.scale=0.45
 //(2)
 line2=createSprite(displayWidth/2,displayHeight/2-250,400,30)
line2.addImage(line2i)
line2.visible=false
line2.scale=0.5
//(3)
line3=createSprite(displayWidth/2,displayHeight/2-200,400,30)
line3.addImage(line3i)
line3.visible=false
line3.scale=0.5
//(4)
line4=createSprite(displayWidth/2,displayHeight/2-150,400,30)
line4.addImage(line4i)
line4.visible=false
line4.scale=0.5
//(5)
line5=createSprite(displayWidth/2,displayHeight/2-100,400,30)
line5.addImage(line5i)
line5.visible=false
line5.scale=0.41
//body parts
face=new Face(100,250,200,150)
//face.addImage(faceimg)
//face.visible=false;
stomach=new Stomach(230,170,250,150)
//stomach.addImage(stomachimg)
//stomach.visible=false;

//making rope
rope2=new rope(face.body,stomach.body)
rope2.visible=true
// adding engine
Engine.run(engine);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine)
  drawSprites();
  rope2.display()
  
//coding of gameState 0
     if(gameState===0){
   
       
        logo.visible=true
       
      
      
      
     // change of gameState 0-1
      if(logo.lifetime==0){
        gameState=1

      }
     
      
     }else if (gameState===2) {
      rope2.visible=true;
      logo.visible=false
      hide()
      playb.destroy()
      background1.visible=true
      face.display()
      stomach.display()
    
     }
     // coding of gameState 1
    else if(gameState===1){
     
     
      playb.visible=true
      line1.visible=true
      line2.visible=true
      line3.visible=true
      line4.visible=true
      line5.visible=true
     }
     // mousePressedOver 
     if(mousePressedOver(playb)){
     
      gameState=2
     }
      
      
      
      
     
     
     
     
     // coding of gamestate 2
   
   
   
   
   
   
   
   
   
      console.log(gameState)
     
  
}
function hide(){
  line1.visible=false;
  line2.visible=false;
  line3.visible=false;
  line4.visible=false;
  line5.visible=false;
  bg.visible=false;
  playb.visible=false;
   
   
}