//Onload carrega após o carregamento do DOM
window.onload = function() {
    console.log("Carregou o DOM")
    var title2 = document.querySelector("#title")
    console.log(title2)
}

console.log("Carregou o JS")
/*Aqui o title não aparece no console.log, pois ele foi carregado antes dos elementos da página.
E consequentemente ainda não existe a tag "title" criada no DOM neste ponto do código.*/
var title = document.querySelector("#title")
console.log(title)