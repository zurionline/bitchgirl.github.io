let bubbles = [];
let setTime = 1000;
let timer = 0;
let life=100
let game1=false
let game2=false
let game3=false
let boobalooba;
let a=0
let b=0
let c=0
let d=0
let square1;//I
let square2;//am
let square3;//a
let square4;//dog
let square5;//not
let img;
let x;
let y;
let touch=0


function setup() {
  createCanvas(400, 400);
  bubble=new Bubble(50,50)
  boobalooba=new Dog("Please stop\njoking like that","This isn't\nfunny","I don't want\nto play like this","arf",width/2,100);
  square1=new dragSquare(10,10,img)
  square2=new dragSquare(70,10,img)
  square3=new dragSquare(130,10,img)
  square4=new dragSquare(200,10,img)
  square5=new dragSquare(270,10,img)

}

function doubleClicked(){
  touch=touch+1
}
function draw() {
  push()
  noStroke()
   rect((width-200)/2, (height-200)/2,200,200)
  textAlign(CENTER)
  textSize(50)
  text("Begin",(width-200)/2+100, (height-200)/2+100)
  pop()
  if((mouseX>=width-200)/2+100&&mouseX<=(width-200)/2+100+200&&mouseY>=(height-200)/2+100&&mouseY<=(height-200)/2+100+200){
    console.log(touch)
    if(touch==1){game1=true
                       click=false}
  }
  //console.log(game3)
  if(game1==true){background(220);
  textSize(15)
  textAlign(LEFT,TOP)
  rect(mouseX-10,width-20,20,20)
  fill(0)
  text("Perserverance:",10,10)
  fill(255,0,0)
  rect(120,6,life*2.7,20)
  
  if(timer<=0){
    timer=setTime;
    bubbles.push(new Bubble(random(width),-80,"someone like\n you will\n never succeed",))
    bubbles.push(new Bubble(random(width),-80,"you don't\nbelong here",))
    bubbles.push(new Bubble(random(width),-80,"your people\nare criminals",))
    bubbles.push(new Bubble(random(width),-80,"you don't\ndeserve to\nbe here",))
  }else{
    timer-=deltaTime/5;
  }
  for(let i=0;i<bubbles.length;i++){
    bubbles[i].update();
  }
  for (let i = 0; i < bubbles.length; i++) {//console.log(bubbles[i].x,bubbles[i].y)
                                            if(bubbles[i].checkHit()){
  //rect(0,0,height,width)
  life=life-5                                                          }
  }//add if statement for model
    if(life<100&life>0){
  life=life+0.1}
  if(life<=0){life=life
  rect(0,0,width,height)
    if(touch==2){game1=false
                  game2=true}} //PLACE ENDING GIF HERE
   
}
function mousePressed(){
    for(let i=0;i<bubbles.length;i++){
    if(bubbles[i].checkPop()){
      bubbles.splice(i,1);
      a=a+1
      //console.log(a)
    }
  }
}

  
  
  
if(game2==true){if(mouseIsPressed){
  }
  fill(220)
  rect(0,0,width,height)
  fill(255)
  a=a+1
  b=b+1
  c=b%4
  boobalooba.show()
  //hand
  rect(width/2+c-50,height-a,100,200)
  boobalooba.bark();
  if(boobalooba.end()){rect(0,0,width,height)
    a=a-1
    if (touch==3){
      game2=false
      game3=true
    }}                    
}

  
if(game3==true){
  background(100);
  fill(255)
  rect(10,300,70,70) 
  rect(90,300,70,70)
  rect(170,300,70,70)
  rect(250,300,70,70)
  square1.update()
  square2.update()
  square3.update()
  square4.update()
  square5.update()
 if(square1.checkPos(10,300,70,70)&&square2.checkPos(90,300,70,70)&&square3.checkPos(170,300,70,70)&&square4.checkPos(250,300,70,70)){//update this to have multiple checks use &&
    rect(0,0,width,height)}
  
  }
  
    if(touch>=4){
    fill(255,0,0)
    rect(0,0,width,height)
  } 
  
}

function mouseDragged(){
square1.checkDrag()
square1.getDist()
square2.checkDrag()
square2.getDist()
square3.checkDrag()
square3.getDist()
square4.checkDrag()
square4.getDist()
square5.checkDrag()
square5.getDist()
//console.log(square1.getDist())
}

////////CLASSES1////////
class Bubble{
  constructor(x,y,text){
    this.x=x;
    this.y=y;
    this.ySpeed=random(1,4)
    this.radius=random(20,30);
    this.text=text
    //console.log(this.x)
  }
  update(){
    noStroke();
    fill(255,255,255,100);
    circle(this.x,this.y,this.radius*2)
    this.y += this.ySpeed
    textAlign(CENTER,CENTER)
    fill(0)
    textSize(this.radius/2)
    text(this.text,this.x,this.y)
  }
  
  checkPop(){
    if(dist(mouseX,mouseY,this.x,this.y)<this.radius){return true;}
    else{return false;}
    
  }
  
  checkHit(){
    if(dist(mouseX,height,this.x,this.y)<this.radius){return true;}
    else{return false;}
    
  }
  
}

////////CLASSES2////////
class Dog{
  constructor( cry1,cry2,cry3,cry4, x, y){
    this.cry1=cry1;
    this.cry2=cry2;
    this.cry3=cry3;
    this.cry4=cry4;
    this.x=x;
    this.y=y;
  }
  
  bark(){
    if(dist(mouseX,mouseY,this.x,this.y)<50&&a<height-this.y){
      textAlign(CENTER);
      textSize(10)
      //text(this.barkSound,this.x,this.y+20);
      a=a-1
      if(a<=100){text(this.cry1,this.x-120,this.y+10);}
      if(a>=100&a<=200){text(this.cry2,this.x-120,this.y+10);}
      if(a>=200&a<=300){text(this.cry3,this.x-120,this.y+10);}
      if(a>=300){if(c==1||c==2||c==3){
        text(this.cry4,this.x-120,this.y+10);}
                       }
    }
  }
  
 show(){
    textAlign(CENTER);
    textSize(50);
    rect((width-150)/2,10,150,250) 
  }
  
  end(){
    if(a>=height-this.y){return true
    }
  }

  
}


////////CLASSES3////////
class dragSquare{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.s = 50;
    this.img=img;
  }
  
  update(){
    fill(0);
    rect(this.x, this.y, this.s, this.s);//change this to an image setup instead
  }
  
  checkDrag(x,y){
 if(mouseX>=this.x&&mouseX<=this.x+this.s&&mouseY>=this.y&&mouseY<=this.y+this.s){
      this.x = mouseX-this.s/2;
      this.y = mouseY-this.s/2;
 }
}
  checkPos(x,y,w,h){
  if(this.x>=x&&this.x+this.s<=x+w&&this.y>=y&this.y+this.s<=y+h){
    return true}
    else{return false}
  }
  
  getDist(){ //i cant figure out how to get it not to shift as I use it :(
    x=mouseX-this.x
    y=mouseY-this.y
    return [x,y]
  }
}
