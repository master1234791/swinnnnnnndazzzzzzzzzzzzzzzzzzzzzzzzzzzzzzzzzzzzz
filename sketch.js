var ball;
var database;
var position;
var forms;
var player;
var game;
var gameState=0;
var playerCount;
var canvas;
var distance=0;
var allPlayers;
var backgroundImg;
var car1;
var car2;
var car3;
var car4;
var car5;
var car1Img;
var car2Img;
var car3Img;
var car4Img;
function preload(){

   track = loadImage("track.png");

   ground = loadImage("ground.png");

   car1Img = loadImage("car1.png");
   car2Img = loadImage("car2.png");
   car3Img = loadImage("car3.png");
   car4Img = loadImage("car4.png");
   


   
}
function setup(){
    database=firebase.database();

   canvas = createCanvas(displayWidth,displayHeight);
    game = new Game();
    game.getState();
    game.start();

   // ball = createSprite(250,250,10,10);
    //ball.shapeColor = "red";
    //var ballPosition=database.ref("ball/position");
    //ballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
   // if(keyDown(LEFT_ARROW)){
        //changePosition(-1,0);
   // }
   // else if(keyDown(RIGHT_ARROW)){
       // changePosition(1,0);
    //}
    //else if(keyDown(UP_ARROW)){
       // changePosition(0,-1);
    //}
    //else if(keyDown(DOWN_ARROW)){
      //  changePosition(0,+1);
    //}
    //drawSprites();
}

/*function changePosition(x,y){
    database.ref("ball/position").set({
        "x":position.x+x,
        "y":position.y+y
    })
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
}
function readPosition(data){
   position=data.val();
   ball.x=position.x;
   ball.y=position.y; 
}
function showError(){
    console.log("ERROR AL ESCRIBIR EN LA BASE DE DATOS");
}*/
