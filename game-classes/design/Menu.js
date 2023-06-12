class Menu{
    pointsTextColor = "#fff";
    lifeTextColor = "#fff";
    fontSize = "20px"
    
    constructor(ctx){
        this.ctx = ctx;
    }
    lifeDamagedState(){
        this.fontSize = "22px";
        this.lifeTextColor = "#f00";
    }
    lifeNormalState(){
        this.fontSize = "20px";
        this.lifeTextColor = "#fff";
    }

    draw(life,points){
        this.ctx.beginPath();

        this.ctx.fillStyle = '#000'
        this.ctx.fillRect(5,10,140,75);
        
        this.ctx.font = `${this.fontSize} Arial, Calibri, Times New Roman`
        
        this.ctx.fillStyle = this.lifeTextColor;
        this.ctx.fillText(`Life: ${life}`,10,40)

        this.ctx.fillStyle = this.pointsTextColor;
        this.ctx.fillText('Points: ',10,70)
    }
}