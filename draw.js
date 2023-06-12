// DESENHAR OBJETOS NA TELA
function drawObjects(){
    design.space.draw();
    design.menu.draw(player.life);
    updatePlayer();
    drawEnemies();
    drawExplosions();
}

// ATUALIZAR DESENHO DO PLAYER
function updatePlayer(){
    player.draw(); 
    player.move(); 
    player.toShoot(); 
    player.fixPosition();
}

// DESNHAR IMIMIGOS
function drawEnemies(){
    for(let i = 0; i < enemies.galacticPirates.length; i++){ 
        const g = enemies.galacticPirates[i];
        
        g.draw(); g.move();

        if(g.y - g.height >= canvas.height){
            enemies.galacticPirates.splice(i,1)
            player.life -= 5;
            i--;
            
            planetDamagedAlert();
        }
        else if(g.life <= 0){
            enemies.galacticPirates.splice(i,1);
            i--;
        }
    };
}
async function drawExplosions(){
    if(bulletExplosions.length > 0){
        for(let i = 0; i < bulletExplosions.length; i++){
            let b = bulletExplosions[i];
            b.draw(ctx);
            if(b.timer <= 0){
                bulletExplosions.splice(i,1);
            }
        }       
    }
}