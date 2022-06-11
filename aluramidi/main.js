const tocaSom = idElementoAudio => document.querySelector(idElementoAudio).play();

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  tecla.onclick = () => tocaSom(`#som_${instrumento}`);
  tecla.onkeydown = evento => {
    if (evento.code === 'Space' || evento.code === 'Enter') tecla.classList.add('ativa');
  }
  tecla.onkeyup = evento => tecla.classList.remove('ativa');
}
