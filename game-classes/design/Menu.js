class Menu{
    constructor(ctx){
        this.ctx = ctx;
    }
    draw(life,points){
        this.ctx.beginPath();

        this.ctx.fillStyle = '#000'
        this.ctx.fillRect(5,10,140,75);
        
        this.ctx.font = '20px Arial, Calibri, Times New Roman'
        this.ctx.fillStyle = '#fff';
        this.ctx.fillText('Life: '+life,10,40)
        this.ctx.fillText('Points: ',10,70)
    }
}