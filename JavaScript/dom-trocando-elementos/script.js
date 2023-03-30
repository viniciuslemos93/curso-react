//trocando elementos | basicamente será trocar uma tag por outra
//primeiramente criar o elemento
var el = document.createElement("h3")
el.classList = "testanto-classe"

var texto = document.createTextNode("Este é o texto")
el.appendChild(texto)
console.log(el)

//selecionando o elemento que quero trocar
var title = document.querySelector("#title")
console.log(title)
//selecionando o pai elemento que quero trocar | Neste caso o paui do "title" é o body
//var body = document.querySelector("body") Também podemos fazer assim.
/*Utilizando o método parentNode (melhor maneira de selecionar o pai),
ele seleciona o pai do elemento, sem vc precisar saber qual seja! */
var pai = title.parentNode

//trocando os elementos
//Syntaxe replaceChild( 1, 2) 1 - o novo elemento. 2 - o elemento que vai ser substituído
pai.replaceChild(el, title)