class GalacticPirate extends SpaceShip{
    constructor(canvas,ctx,x,y,width,height,speed,life){ 
        super(canvas,ctx,x,y,width,height,speed,life,GalacticPirate.getSprite());

        this.movement.down = true;
    }
    static getSprite(){
        let image = new Image();
        image.src = `sprites/galacticPirate.png`;

        return image;
    }
}