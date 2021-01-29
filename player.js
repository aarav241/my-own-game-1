class Player{
    constructor(){
       this.index = null;
        this.name = null;
    }
    update(){
        var playerIndex = "player"+ this.index;
        database.ref(playerIndex).set({
          name:this.name
        
        });
      }
}