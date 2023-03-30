//criamos o elemento
var novoParagrafo = document.createElement("p")
console.log(novoParagrafo)
//criamos o nó de texto
var texto = document.createTextNode("Este é o conteúdo do parágrafo")
//inserimos o nó de texto no elemento
novoParagrafo.appendChild(texto)
//mapeamos/selecionamos a TAG pai que queremos inserir, neste caso o body
var body = document.querySelector("body")
//inserimos o elemento criado no como filho co body
body.appendChild(novoParagrafo)

//Inserindo o parágrafo no container criado
var container = document.querySelector("#container")
console.log(container)

var el = document.createElement("span")
el.appendChild(document.createTextNode("Texto do span"))
console.log(el)

container.appendChild(el)