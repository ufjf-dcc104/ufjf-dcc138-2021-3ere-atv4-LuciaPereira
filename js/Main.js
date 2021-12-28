import Cena from "./Cena.js"
console.log("Hello, Word");
const canvas = document.querySelector("canvas");
console.log(canvas);
const cena1 = new Cena(canvas);
cena1.desenhar();