class Player extends SpaceShip{
    isShooting = false;
    shootArray = [];
    shootLifeSpan = null;
    delayTime = 10;
    delayLoading = 0;

    constructor(canvas,ctx,x,y,width,height,type,life,speed){
        const sprite = Player.getSprite(type);
        super(canvas,ctx,x,y,width,height,speed,life,sprite);
    }
    
    keyDown(key){
        if(key == 'a' || key == 'arrowleft')  return this.movement.left = true;
        if(key == 'd' || key == 'arrowright') return this.movement.right = true;
        if(key == 's' || key == 'arrowdown')  return this.movement.down = true;
        if(key == 'w' || key == 'arrowup')    return this.movement.up = true;
        if(key == ' ' || key == 'z')          return this.isShooting = true;
    }

    keyUp(key){
        if(key == 'a' || key == 'arrowleft')  return this.movement.left = false;
        if(key == 'd' || key == 'arrowright') return this.movement.right = false;
        if(key == 's' || key == 'arrowdown')  return this.movement.down = false;
        if(key == 'w' || key == 'arrowup')    return this.movement.up = false;
        if(key == ' ' || key == 'z')          return this.isShooting = false;
    }

    static getSprite(type){
        let image = new Image();
        image.src = `sprites/player_style_${type}.png`;

        return image;
    }

    toShoot(){
        this.delayLoading++;

        if(this.isShooting && this.delayLoading >= this.delayTime){
            this.shootArray.push(new Shoot('standard',this.x+this.width/2,this.y));
            this.delayLoading = 0;
        } 

        if(this.shootArray.length) 
            this.moveShoots();
    }

    moveShoots(){
        for(let s of this.shootArray){
            s.y += s.speedY;
            s.x += s.speedX
            s.draw(this.ctx);

            if(s.y < 0) this.shootArray.splice(s,1)
        }
    }

    fixPosition(){
        if(this.x < 0) this.x = 0;

        else if(this.x + this.width > this.canvasWidth) 
            this.x = this.canvasWidth - this.width 

        if(this.y < 0) this.y = 0;

        else if(this.y + this.height > this.canvasHeight)
            this.y = this.canvasHeight - this.height;           
    }
}