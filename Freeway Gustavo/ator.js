//variaveis do ator

let xAtor = 85;
let yAtor = 366;
let larguraAtor = 30;
let alturaAtor = 30;
let colisao = false;
let meusPontos = 0;

//funcoes do ator

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 2;
  }
  if (keyIsDown(DOWN_ARROW) && yAtor <= 366) {
    yAtor += 2;
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], larguraCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisao) {      
      somDaColisao.play();
      yAtor = 366;
      if (meusPontos > 0) meusPontos--;           
    }
  }
}

function incluiPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 26);
}

function marcaPontos() {
  if (yAtor <= 26) {
    somDoPonto.play();
    yAtor = 366;
    meusPontos++;
    
  }
}







