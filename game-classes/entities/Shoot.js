class Shoot{
    constructor(type,x,y){
        let { sprite,speedX,speedY,size,damage } = this.getShootProperties(type); 
        
        this.x = x;
        this.y = y;

        this.sprite = sprite;
        this.speedX = speedX;
        this.speedY = speedY;
        this.damage = damage;
        this.size = size;
    }

    getShootProperties(type){
        let spriteImg = new Image();
        spriteImg.src = `sprites/shoot_${type}.png`;

        let shotMechanics = this.getShootMechanics(type);

        return {
            sprite: spriteImg,
            ...this.getShootMechanics(type),
        }
    }

    getShootMechanics(type){
        if(type.includes('standard')){
            return {
                speedX: 0,
                speedY: -10,
                damage: 10,
                size: 10,
            }
        }
    }

    draw(ctx){
        ctx.beginPath();
        ctx.drawImage(this.sprite,this.x-this.size/2,this.y,this.size,this.size);
    }
}