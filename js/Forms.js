class Forms{
  constructor(){
    this.historia=createElement("h3");
    this.input=createInput("carros"); 
    this.button=createButton("Jugar");
    this.greeting= createElement('h3');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }  
  hide(){
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
    this.title.hide();
  }
  display(){
   this.title.html("Juego de Carreras");
   this.title.position(displayWidth/2-50,0);
   this.historia.html("Un dia señor pierde a su papa y le deja sus cosas y ese señor se llama "/n);
   this.historia.position(displayWidth/2-35,0);

   this.input.position(displayWidth/2-40,displayHeight/2-80);
   this.button.position(displayWidth/2+30,displayHeight/2); 
   this.reset.position(displayWidth-100,20);
   
   this.button.mousePressed(()=>{
   this.input.hide();
   this.button.hide();
   player.name = this.input.value();
   playerCount+= 1 
   player.index=playerCount;
   player.update();
   player.updateCount(playerCount);
   this.greeting.html("Hola "+player.name);
   this.greeting.position(displayWidth/2-70,displayHeight/4);  
   gameState=1;
   }) 
   this.reset.mousePressed(()=>{
     player.updateCount(0);
     game.update(0);
   })  
  }
}