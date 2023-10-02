
function tocaSom (idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = tocaSom;

    contador = contador + 1

    console.log(contador);
}