//tag
var titulo = document.getElementsByTagName('h1')[0]
console.log(titulo)

var lis = document.getElementsByTagName('li')
console.log(lis)

//id
var paragrafo = document.getElementById('paragrafo')
console.log(paragrafo)

//class
var itensDaLista = document.getElementsByClassName('item')
console.log(itensDaLista)

//querySelectorAll | Utilizasa-se a conotação de CSS, (#) pra ID e (.) pra classe
var itensQuery = document.querySelectorAll('#lista li')
console.log(itensQuery)

var itensQuery2 = document.querySelectorAll('#lista2 li')
console.log(itensQuery2)

//querySelector
var lista = document.querySelectorAll('#lista')
console.log(lista)

//Selecionando o span dentro do id parágrafo.
var span = document.querySelector('#paragrafo span')
console.log(span)