//variaveis do carro

const larguraCarro = 50;
const alturaCarro = 40;
const xCarros = [600, 600, 600, 600, 600, 600];
const yCarros = [40, 96, 150, 210, 270, 318];
const velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];


//funcoes do carro

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < velocidadeCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro() {
  for (let i = 0; i < xCarros.length; i++) {
    if (xCarros[i] < -50) {
      xCarros[i] = 600;
    }
  }
}
    



