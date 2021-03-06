import AssetManager from "./AssetManager.js";
import Cena from "./Cena.js"
import Mapa from "./Mapa.js";
import Mixer from "./Mixer.js";
import Sprite from "./Sprite.js";
import modeloMapa1 from "../maps/mapa1.js";
import InputManager from "./InputManager.js";

const input = new InputManager();
const mixer = new Mixer(10);
const assets = new AssetManager(mixer);

assets.carregaImagem("garota", "assets/garota.png");
assets.carregaImagem("esqueleto","assets/garoto.png");
assets.carregaImagem("orc","assets/orc.png");
assets.carregaAudio("moeda","assets/coin.wav");
assets.carregaAudio("boom","assets/boom.wav");
assets.carregaImagem("ghost","assets/ghost.png");
assets.carregaImagem("dragon","assets/dragon.png");
assets.carregaImagem("arvore","assets/arvore.png");
assets.carregaImagem("clay","assets/clay.png");
assets.carregaAudio("hurt","assets/hurt.wav");


const canvas = document.querySelector("canvas");
canvas.width = 16*32;
canvas.height = 14*32;

input.configurarTeclado({
    "ArrowLeft" : "MOVE_ESQUERDA",
    "ArrowRight" : "MOVE_DIREITA",
    "ArrowUp" : "MOVE_CIMA",
    "ArrowDown" : "MOVE_BAIXO",
});

const cena1 = new Cena(canvas, assets);

const mapa1 = new Mapa(14,16,32);
mapa1.carregaMapa(modeloMapa1);
cena1.configuraMapa(mapa1);

const pc = new Sprite({ x:50,y:150});
pc.controlar = function(dt){
    if(input.comandos.get("MOVE_ESQUERDA")){
        this.vx = -50;
    }else if(input.comandos.get("MOVE_DIREITA")){
        this.vx = +50;
    }else{
        this.vx = 0;
    }
    if(input.comandos.get("MOVE_CIMA")){
        this.vy = -50;
    }else if(input.comandos.get("MOVE_BAIXO")){
        this.vy = +50;
    }else{
        this.vy = 0;
    }
};
cena1.adicionar(pc);

function perseguePC(dt){
    this.vx = 25 * Math.sign(pc.x - this.x);
    this.vy = 25 * Math.sign(pc.y - this.y);//
}

const en1 = new Sprite({x:360, color:"red",controlar:perseguePC});

cena1.adicionar(en1);
cena1.adicionar(new Sprite({x:115,y:70, vy:10,color:"red",controlar:perseguePC}));
cena1.adicionar(new Sprite({x:115,y:160, vy:-10,color:"red",controlar:perseguePC}));

cena1.iniciar();
novoInimigo();

function novoInimigo()
{
    let n1 = 0, n2 = 0;
    while (mapa1.tiles[n1][n2] !==0)
    {
        n1 = Math.floor(Math.random() * (mapa1.LINHAS - 1 + 1) + 1);
        n2 = Math.floor(Math.random() * (mapa1.COLUNAS - 1 + 1) + 1);
    }
    const en1 = (new Sprite({x: n2* 32 + 32 / 2, y: n1 * 32 + 32 / 2, color: "black", controlar: perseguePC}));
        
    cena1.adicionar(en1);
    setTimeout(novoInimigo, 10000);
    
}

document.addEventListener("keydown" , (e)=>{
    switch (e.key) {
        case "s":
            cena1.iniciar();
            break;
            case "S":
                cena1.parar();
                break;
                case "c":
                    assets.play("moeda");
                    break;
                    case "b":
                        assets.play("boom");
                        break;
                        case "a":
                            assets.play("hurt");
                            break;

     
    }
});
