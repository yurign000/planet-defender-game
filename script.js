var player;
var enemies = { galacticPirates:[], meteors:[] };
var design = {};
var shoot;

var spawnEnemyTime = 120;
var spawnEnemyLoading = 0;

var canvas,ctx;
var loop;


// AO CARREGAR A PÁGINA
function loadPage(){
    // OBTENDO CONTEXTO DO CANVAS
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    resize(); // REDIMENSIONANDO O CANVAS

    ctx.imageSmoothingEnabled = false;

    // CRIANDO OBJETOS
    design.space = new Sky(canvas,ctx,100);
    player = new Player(canvas,ctx,200,200,25,50,2,20,7);
    design.menu = new Menu(ctx,player.x);
    
    game();         // INICIAR LOOP/FPS
    setKeyEvents(); // DEFINIR EVENTOS DO TECLADO
}

// FUNÇÃO CHAMADA A CADA ATUALIZAÇÃO DA TELA
function game(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    spawnEnemies();
    drawObjects();
    loop = requestAnimationFrame(game)
}

// DESENHAR OBJETOS NA TELA
function drawObjects(){
    design.space.draw();
    design.menu.draw(player.life);
    drawPlayer();
    drawEnemies();
    
    console.log(enemies.galacticPirates.length)
}

function setKeyEvents(){
    document.addEventListener(
        'keydown',
        (event) => player.keyDown(event.key.toLowerCase())
    );
    document.addEventListener(
        'keyup',
        (event) => player.keyUp(event.key.toLowerCase())
    );
}

function spawnEnemies(){
    spawnEnemyLoading++;
    if(spawnEnemyLoading >= spawnEnemyTime){
        spawnEnemyLoading = 0;
        enemies.galacticPirates.push(
            new GalacticPirate(
                canvas,ctx,random(100,canvas.width),0,50,50,2,20
            )
        );

    }
}
function random(min,max){
    return Math.round(Math.random()*(max-min)+min);
}

function drawEnemies(){
    for(let g of enemies.galacticPirates){ 
        g.draw(); g.move();
        if(g.y - g.height >= canvas.height) 
            enemies.galacticPirates.splice(enemies.galacticPirates[g],1)
    };
}
function drawPlayer(){
    player.draw(); 
    player.move(); 
    player.toShoot(); 
    player.fixPosition();
}