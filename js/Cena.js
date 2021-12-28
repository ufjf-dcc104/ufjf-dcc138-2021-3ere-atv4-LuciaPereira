export default class Cena{
    /* E responsavel por desenhar elementos na tela eum uma animaçãco
    */
    constructor(canvas){
        this.canvas = this.canvas;
        this.ctx = canvas.getContext("2d");
    }
    desenhar(){
        this.fillStyle = "grey";
        this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
    }
}