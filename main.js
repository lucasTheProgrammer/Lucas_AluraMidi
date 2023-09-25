
function tocaSomPom () {
    document.querySelector ('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSomPom;

while (contador < listaDeTeclas.length) {
    listaDeTeclas[0].onclick = tocaSomPom;

    contador = contador + 1
    console.log(contador);
}