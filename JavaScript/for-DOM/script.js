var frutas = ['Laranja', 'Maçã', 'Pera', 'Banana', 'Uva']

var listaUl = document.createElement('ul')

var body = document.getElementsByTagName('body')

console.log(body[0])

body[0].appendChild(listaUl)

var listaNoBody = document.getElementsByTagName('ul')

console.log(listaNoBody[0])

for (var i = 0; i < frutas.length; i++) {

    var frutasFor = document.createElement('li')

    var textoLi = document.createTextNode(frutas[i])

    frutasFor.appendChild(textoLi)

    listaNoBody[0].appendChild(frutasFor)
}