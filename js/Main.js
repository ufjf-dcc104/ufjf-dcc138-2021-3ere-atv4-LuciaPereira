import AssetManager from "./AssetManager.js";
import Cena from "./Cena.js"
import Mixer from "./Mixer.js";
import Sprite from "./Sprite.js";

const assets = new AssetManager();

assets.carregaImagem("garota", "assets/garota.png");
assets.carregaImagem("esqueleto","assets/garoto.png");
assets.carregaImagem("orc","assets/orc.png");
assets.carregaAudio("moeda","assets/coin.wav");
assets.carregaAudio("boom","assets/boom.wav");

const mixer = new Mixer(10);

const canvas = document.querySelector("canvas");
const cena1 = new Cena(canvas, assets);
const pc = new Sprite({vx:10});
const en1 = new Sprite({x:140,w:30,color:"red"});

cena1.adicionar(pc);
cena1.adicionar(en1);
cena1.adicionar(new Sprite({x:40,w:30,color:"red"}));

cena1.iniciar();

document.addEventListener("keydown" , (e)=>{
    switch (e.key) {
        case "s":
            cena1.iniciar();
            break;
            case "S":
                cena1.parar();
                break;
                case "c":
                    mixer.play(assets.audio("moeda"));
                    break;
                    case "b":
                        mixer.play(assets.audio("boom"));
                        break;

     
    }
})
