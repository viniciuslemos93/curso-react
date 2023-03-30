//Alterando CSS
//primeiramente selecionar o elemento
var title = document.querySelector("#title")

//adicionar o estilo
title.style.color = "red"
//propriedades css que contém traço, exemplo o background-color, no JS não pode ter, deve usar camel case
title.style.backgroundColor = "yellow"

//adicionar vários estilos
var subtitle = document.querySelector(".subtitle")
subtitle.style.cssText = "color: blue; background-color: pink; font-size: 3em;"