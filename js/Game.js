class Game{
  constructor(){
      
  }  
  getState(){
    var gameStateRef=database.ref('gameState');
    gameStateRef.on("value",function(data){
      gameState = data.val();   
    })  
  }
  update(state){
   database.ref('/').update({
    gameState:state   
   });
  }
  async start(){ 
   if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
     
      forms=new Forms(); 
      forms.display();

   }  
   car1 = createSprite(100,200);
   car1.addImage("car1",car1Img)
   car2 = createSprite(300,200);
   car2.addImage("car2",car2Img);
   car3 = createSprite(500,200);
   car3.addImage("car3",car3Img);
   car4 = createSprite(700,200);
   car4.addImage("car4",car4Img);
   car5 = [car1,car2,car3,car4];
  }
  play(){
   forms.hide(); 
  // textSize(30);
   //text(" Game start ",120,100)
   Player.getPlayerInfo();
   player.getCarsAtEnd();
   if(allPlayers!== undefined){
     background(rgb(198,135,103));
     image(track,0,-displayHeight*4,displayWidth,displayHeight*5);    
     //var display_position = 130;
    var index=0;
    var x=0;
    var y;
    for(var plr in allPlayers){
      index=index+1;
      x=x+200;
      y=displayHeight-allPlayers[plr].distance;
      car5[index-1].x=x;
      car5[index-1].y=y;
      if(index == player.index){
        stroke(10);  
        fill("red");
        ellipse(x,y,60,60);
        car5[index-1].shapeColor="red";
        camera.position.x=displayWidth/2;
        camera.position.y=car5[index-1].y;
      }
      
     // textSize(15);
      //text (allPlayers[plr].name+": "+allPlayers[plr].distance,120,display_position);
    }
   }
   if(keyIsDown(UP_ARROW)&&player.index!==null){
    player.distance+=50;
    player.update();
   }
   if(player.distance>3860){
     gameState=2;
     player.rank+=1;
     Player.updateCarsAtEnd(player.rank);
   }
   drawSprites();
  }   
  end(){
    console.log("Terminó el juego")
    console.log(player.rank);
  } 
  }
