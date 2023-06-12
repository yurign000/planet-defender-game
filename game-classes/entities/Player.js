class Player extends SpaceShip{
    isShooting = false;
    bulletArray = [];
    bulletLifeSpan = null;
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

        let imageLoaded = new Promise(
            (resolve) =>
            image.onload = () => resolve(image)
        )

        return imageLoaded;
    }

    toShoot(){
        this.delayLoading++;

        if(this.isShooting && this.delayLoading >= this.delayTime){
            this.bulletArray.push(new Bullet('standard',this.x+this.width/2,this.y));
            this.delayLoading = 0;
        } 

        if(this.bulletArray.length) 
            this.moveBullets(enemies);
    }

    moveBullets(){
        for(let i = 0; i < this.bulletArray.length; i++){
            let b = this.bulletArray[i];
            b.y += b.speedY;
            b.x += b.speedX
            b.draw(this.ctx); b.nearObjectDetection(this.bulletArray,i)

            if(b.y < 0) this.bulletArray.splice(b,1)
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