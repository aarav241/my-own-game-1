class Game{
    constructor(){
    }
getState(){
   var gameStateRef=database.ref('gamestate')
   gameStateRef.on("value",function (data){
gamestate= data.val();
   })
}
update(state){
database.ref('/').update({
    gamestate:state
})
}
start(){
    if(gamestate===1){
 player =new Player();
 form=new Form();
 form.show();
    }
}
play(){
    if(mousePressedOver(button1)){
        wall.velocityY=-5;
        if(wall.y<=10){
        gamestate=1;
        button1.visible=false;
        wall.destroy();
        }
}
}
}