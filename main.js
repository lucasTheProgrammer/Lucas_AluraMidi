
function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (let indice = 0; indice < listaDeTeclas.length; contador++) {

  const tecla = listaDeTeclas[indice];
  const instrumento = tecla.classList[1]
  const idAudio = `#som_${instrumento}`;
  tecla.onclick = function () {
    tocaSom(idAudio);
  }
    
   


    tecla.onkeydown = function () {
    
       tecla.classList.add('ativa')
    }
 
 
 
}
 
 

