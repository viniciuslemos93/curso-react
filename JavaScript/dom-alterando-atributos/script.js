//Adicionando atributos
//primeiramente criar o elemento
var title = document.querySelector("#title")
//o método setAttribute(1, 2) 1 - nome do atributo a adicionar, 2 - descrição do atributo
title.setAttribute("class", "testanto-atributo")
//desabilitando o botão
var btn = document.querySelector("#btn")
btn.setAttribute("disabled", "disabled")
//inserindo atributo de Id no subtitulo 
var subtitle = document.querySelector(".subtitle")
subtitle.setAttribute("id", "subtitulo-2")

//Removendo atributo
var lista = document.querySelector("#lista")
lista.removeAttribute("id")