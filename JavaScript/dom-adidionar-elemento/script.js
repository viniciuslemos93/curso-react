//criar elemento
var el = document.createElement("div")
//adicionando classe de CSS no elemento
el.classList="div-criada"
console.log(el)

var container = document.querySelector("#container")
container.appendChild(el)

var el2 = document.createElement("div")
el2.classList = "div-before"
//selecionando a div criada
var el3 = document.querySelector("#container .div-criada")
console.log(el3)
//o método insertBefore( , ) recebe como dois parâmetros, o primeiro o elemento que quer inserir,
// e o segundo parâmetro o elemento que é a referência para inserir um antes dele.
container.insertBefore(el2, el3)