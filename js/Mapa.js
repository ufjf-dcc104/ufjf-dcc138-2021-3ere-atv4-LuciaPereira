export default class Mapa{
    constructor(linhas=12, colunas=14, tamanho=32){
        this.LINHAS = linhas;
        this.COLUNAS = colunas;
        this.SIZE = tamanho;
        this.tiles = [];

        for (let l =0;l < this.LINHAS;l++) {
            this.tiles[l] = [];
            for (let c = 0; c < this.COLUNAS; c++) {
                this.tiles[l][c] = 0;
                
            }
            
        }this.cena = null;
        this.mapa = null;
    }
    desenhar(ctx,assets){
        for (let l =0;l < this.LINHAS;l++) {
            for (let c = 0; c < this.COLUNAS; c++) {
                switch(this.tiles[l][c] ){
                    case 1:
                        ctx.drawImage(assets.img("clay"), 32 * c, 32 * l, 32, 32);
                    break;
                    case 2:
                        ctx.drawImage(assets.img("ghost"), 32 * c, 32 * l, 32, 32);
                    break;
                    case 3:
                        ctx.drawImage(assets.img("dragon"), 32 * c, 32 * l, 32, 32);
                    break;
                    default:
                        ctx.drawImage(assets.img("arvore"), 32 * c, 32 * l, 32, 32);
                        break;
                }
                    /*
                    case 1:
                        ctx.fillStyle = "grey";
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "black";
                    break;
                    case 2:
                        ctx.fillStyle = "red";
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "orange";
                        break;
                    default:
                        ctx.fillStyle = "black";
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = "grey";                        
                }
                ctx.fillRect(c * this.SIZE, l * this.SIZE,this.SIZE, this.SIZE);
                ctx.strokeRect(c * this.SIZE, l * this.SIZE, this.SIZE, this.SIZE);
            */
        }
            
        }
    }
    carregaMapa(modelo){
        this.LINHAS = modelo.length;
        this.COLUNAS = modelo[0]?.length ?? 0;
        this.tiles = [];
        
        for (let l =0;l < this.LINHAS;l++) {
            this.tiles[l] = [];
            for (let c = 0; c < this.COLUNAS; c++) {
                this.tiles[l][c] = modelo[l][c];                
            }
        }
    }
};