class GalacticPirate extends SpaceShip{
    constructor(canvas,ctx,x,y,size,speed,life){ 
        super(canvas,ctx,x,y,size,speed,life,GalacticPirate.getSprite());

        this.movement.down = true;
    }
    static getSprite(){
        let image = new Image();
        image.src = `sprites/galacticPirate.png`;

        let imageLoaded = new Promise(
            (resolve) =>
            image.onload = () => resolve(image)
        )

        return imageLoaded;
    }
}