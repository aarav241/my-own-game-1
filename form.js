class Form{
    constructor(){
       // if(gamestate ===1){
this.input=createInput("");
this.button=createButton('Tap to continue');
this.title=createElement('h1');
this.greeting=createElement('h4');
this.name=createElement('h4'); 
     //   }   
}


    hide(){
        this.input.hide();
this.button.hide();
this.title.hide();
this.greeting.hide();
    }

    show(){
        this.title.html("Covert operation");
        this.title.position(windowWidth/2-100,50);

        this.name.html("Enter your name");
        this.name.position(windowWidth/2-50,windowHeight/2-100);
//if(gamestate===1){
        this.input.position(windowWidth/2-60,windowHeight/2);
        this.button.position(windowWidth/2-30,windowHeight/2+100);
//}
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.name.hide();
            
player.name=this.input.value();
            player.update();

            this.greeting.html("Hii Soldier, let's save some lives");
            this.greeting.position(windowWidth/2+200,windowHeight-80);
        })
    }
}