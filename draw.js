// DESENHAR OBJETOS NA TELA
function drawObjects(){
    design.space.draw();
    design.menu.draw(player.life);
    updatePlayer();
    drawEnemies();
}

// ATUALIZAR DESENHO DO PLAYER
function updatePlayer(){
    player.draw(); 
    player.move(); 
    player.toShoot(enemies); 
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
        }
    };
}