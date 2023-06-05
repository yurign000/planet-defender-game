// MOLDE DAS NAVES ESPACIAIS DO JOGO: player,enemy
class SpaceShip{

    // MOVIMENTAÇÃO DAS NAVES DO JOGO
    movement = {
        up:false,
        down:false,
        left:false,
        right:false,
    }
    constructor(canvas,ctx,x,y,width,height,speed,life,sprite){
        this.canvasWidth = canvas.width
        this.canvasHeight = canvas.height
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.life = life;
        this.height = height;
        this.width = width;
        this.sprite = sprite;
    }
    draw(){
        this.ctx.beginPath();
        this.ctx.drawImage(this.sprite,this.x,this.y,this.width,this.height);
    }
    move(){
        if(this.movement.left) 
            this.x -= this.speed;

        else if(this.movement.right) 
            this.x += this.speed;

        if(this.movement.down) 
            this.y += this.speed/1.7;

        else if(this.movement.up) 
            this.y -= this.speed/1.7;
    }
}