var bg,mouse,cat,cat1,cat2,mouse,mouse1,mouse2,cats,mouses;
function preload() 
{
    //load the images here
    bg = loadImage("images/garden.png");
    cat = loadAnimation("images/cat2.png","images/cat3.png");
    cat1 = loadImage("images/cat1.png");
    cat2 = loadImage("images/cat4.png");
    mouse = loadAnimation("images/mouse2.png","images/mouse3.png");
   mouse1 = loadImage("images/mouse1.png");
   mouse2 = loadImage("images/mouse4.png");
}
 
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cats = createSprite(870,600);
    cats.addImage("standing",cat1);
    cats.scale = 0.15
    mouses = createSprite(200,600);
    mouses.addImage("sleeping",mouse1);
    mouses.scale = 0.1
}

function draw()
{

    background(bg);
    //Write condition here to evalute if tom and jerry collide
   if(cats.x-mouses.x <(cats.width-mouses.width)/2)
   {
     cats.velocityX = 0; 
     cats.addAnimation("catsStopper",cat2);
     cats.changeAnimation("catsStopper");
     mouses.addAnimation("mouseStopper",mouse2);
     mouses.changeAnimation("mouseStopper");
   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW)
  {
    mouses.addAnimation("mouseTreasing",mouse);
      mouses.changeAnimation("mouseTreasing");
      mouses.frameDelay = 25;
      cats.velocityX= -5;
      cats.addAnimation("catTreasing",cat);
      cats.changeAnimation("catTreasing");
      cats.frameDelay = 25;
  }
  





}
