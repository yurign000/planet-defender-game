class Sky{
    stars = new Path2D();
    planet = new Path2D();
    
    constructor(canvas,ctx,starsCount){
        this.canvasWidth = canvas.width;
        this.canvasHeight = canvas.height;
        this.ctx = ctx;
        this.generateStars(starsCount);
        this.generatePlanet();
    }
    // DESENHAR CEU DO JOGO
    draw(){
        this.ctx.save();
        this.ctx.beginPath();

        // PLANO DE FUNDO
        this.ctx.fillStyle = '#001';
        this.ctx.fillRect(0, 0, this.canvasWidth,this.canvasHeight);

        // ESTRELAS
        this.ctx.fillStyle = '#ccc';
        this.ctx.fill(this.stars)

        // PLANETA
        this.ctx.shadowOffsetY = -10
        this.ctx.shadowColor = "#bff"
        this.ctx.fillStyle = '#0bb';
        this.ctx.strokeStyle = '#0ee'
        this.ctx.lineWidth = 50
        this.ctx.fill(this.planet);
        this.ctx.stroke(this.planet);

        this.ctx.closePath();
        this.ctx.restore();
    }

    // GERAR ESTRELAS ALEATORIAMENTE
    generateStars(starsCount){
        while(starsCount-- > 0){
            let size = Math.round(Math.random()*4)+1;
            let x = Math.round(Math.random()*this.canvasWidth);
            let y = Math.round(Math.random()*this.canvasHeight);
            this.stars.rect(x,y,size,size);
        }
    }
    // CRIAR FORMA DO PLANETA
    generatePlanet(){
        let planetRay = 150;
        let planetX = -100;
        let planetX2 = this.canvasWidth + 100;
        let planetY = this.canvasHeight;
        let screenCenterX = this.canvasWidth / 2;

        this.planet.moveTo(planetX, planetY);
        this.planet.quadraticCurveTo(screenCenterX, planetY - planetRay, planetX2, planetY);
    }
}