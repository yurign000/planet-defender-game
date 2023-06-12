class Bullet{
    constructor(type,x,y){
        let { sprite,speedX,speedY,size,damage } = this.getBulletProperties(type); 
        
        this.x = x;
        this.y = y;

        this.sprite = sprite;
        this.speedX = speedX;
        this.speedY = speedY;
        this.damage = damage;
        this.size = size;
    }

    getBulletProperties(type){
        let image = new Image();
        image.src = `sprites/bullet_${type}.png`;

        let imageLoaded = new Promise(
            (resolve) =>
            image.onload = () => resolve(image)
        )

        return {
            sprite: imageLoaded,
            ...this.getBulletMechanics(type),
        }
    }

    getBulletMechanics(type){
        if(type.includes('standard')){
            return {
                speedX: 0,
                speedY: -10,
                damage: 10,
                size: 10,
            }
        }
    }

    async draw(ctx){
        ctx.beginPath();
        ctx.drawImage(await this.sprite,this.x-this.size/2,this.y,this.size,this.size);
    }

    nearObjectDetection(bulletArray,b){
        if(enemies.galacticPirates.length){
            for(let i = 0; i < enemies.galacticPirates.length; i++){
                let g = enemies.galacticPirates[i];

                if(this.collision(g)){
                    g.life -= 5;
                    bulletArray.splice(b,1)
                    bulletExplosions.push(new BulletExplosion(this.x,this.y,30,5));
                    break
                }
            }
        }
    }
    collision(obj){
        let bulletY1 = this.y;
        let bulletY2 = this.y + this.size;
        let bulletX1 = this.x;
        let bulletX2 = this.x + this.size;
        
        let objY1 = obj.y;
        let objY2 = obj.y + obj.height;
        let objX1 = obj.x;
        let objX2 = obj.x + obj.width;

        if(bulletY1 < objY2){
            if(
                bulletY2 > objY1 &&
                bulletX1 < objX2 &&
                bulletX2 > objX1 
            )
                return true;
        }
        return false;
    }
    explosion(){

    }
}