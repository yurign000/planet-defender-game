class Sky{
    stars = new Path2D();
    planet = new Path2D();
    
    constructor(canvas,ctx){
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.ctx = ctx;
        this.sprite = this.getSprite()
    }
    getSprite(){
        let image = new Image();
        image.src = `sprites/space.jpg`;

        return image;
    }

    // DESENHAR CEU DO JOGO
    draw(){
        this.ctx.beginPath();

        this.ctx.drawImage(this.sprite,0,0,this.canvasWidth,this.canvasHeight)

        this.ctx.closePath();
    }
}