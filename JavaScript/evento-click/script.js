//Evento de click
var btn = document.querySelector("#btn")
var title = document.querySelector("#title")
console.log(btn)

btn.addEventListener("click", function() {
    console.log("Clicou!!")
    this.style.color = "red"
})
//click afetando outros elementos
title.addEventListener("click", function() {
    var subtitle = document.querySelector(".subtitle")
    subtitle.style.display = "none"
    this.style.color = "red"
})