var player;
var enemies = { galacticPirates:[], meteors:[] };
var design = {};
var bulletExplosions = [];

var spawnEnemyTime = 80;
var spawnEnemyLoading = 0;

var canvas,ctx;
var loop;
var planetDamagedTimeout;

// AO CARREGAR A PÁGINA
function loadPage(){
    // OBTENDO CONTEXTO DO CANVAS
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');
    resize(); // REDIMENSIONANDO O CANVAS

    ctx.imageSmoothingEnabled = false;

    // CRIANDO OBJETOS
    design.space = new Sky(canvas,ctx);
    player = new Player(canvas,ctx,200,200,50,2,20,7);
    design.menu = new Menu(ctx);
    
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

// DEFINIR EVENTOS DE TECLADO
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

// GERAR INIMIGOS ALEATORIAMENTE
function spawnEnemies(){
    spawnEnemyLoading++;

    // DELAY PARA GERAR INIMIGOS
    if(spawnEnemyLoading >= spawnEnemyTime){
        spawnEnemyLoading = 0;

        // CRIAR NOVO INIMIGO
        enemies.galacticPirates.push(
            new GalacticPirate(
                canvas,ctx,random(100,canvas.width),0,50,3,20
            )
        );
    }
}

// FUNÇÃO PARA GERAR NÚMEROS ALEATÓRIOS
function random(min,max){
    return Math.round(Math.random()*(max-min)+min);
}

function planetDamagedAlert(){
    design.menu.lifeDamagedState();

    if(typeof planetDamagedTimeout === 'number')
        clearTimeout(planetDamagedTimeout)

    setTimeout(()=>{
        design.menu.lifeNormalState();
    },150)
}