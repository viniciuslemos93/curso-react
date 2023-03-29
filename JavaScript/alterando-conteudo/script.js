//selecionar o elemento
var title = document.querySelector("#title")
console.log(title)
/*As duas maneiras de inserir os dados
innerHTML
textContent -> mais utilizado, recomendado e performático
*/
title.innerHTML = "Testando o texto alterado"

var subtitle = document.querySelector(".subtitle")
console.log(subtitle)
subtitle.textContent = "Testando o textContent"
