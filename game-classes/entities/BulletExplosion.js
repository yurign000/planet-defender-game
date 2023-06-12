class BulletExplosion{
    constructor(x,y,size,timer){
        this.x = x;
        this.y = y;
        this.size = size;
        this.timer = timer;
        this.sprite = this.getSprite();
    }
    getSprite(){
        let image = new Image();
        image.src = `sprites/bullet_explosion.png`;

        let imageLoaded = new Promise(
            (resolve) =>
            image.onload = () => resolve(image)
        )

        return imageLoaded;
    }
    async draw(ctx){
        ctx.beginPath();
        ctx.drawImage(await this.sprite,this.x-this.size/2,this.y-this.size/2,this.size,this.size);
        this.timer--;
    }

}