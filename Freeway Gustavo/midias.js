//imagens e sons

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarros;

let somDaTrilha;
let somDaColisao;
let somDoPonto;


function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemCarros = [
    loadImage("imagens/carro-1.png"),
    loadImage("imagens/carro-2.png"),
    loadImage("imagens/carro-3.png"),
    loadImage("imagens/carro-1.png"),
    loadImage("imagens/carro-2.png"),
    loadImage("imagens/carro-3.png")
  ];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}