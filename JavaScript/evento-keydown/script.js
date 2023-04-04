//Evento de keydown
/*Aqui utilizamos o parâmetro "event" ou "e", na qual o JS dá algumas informações do evento*/
document.addEventListener("keydown", function(event) {
    console.log(event.key)

    if (event.key === "Enter") {
        console.log("Apertou Enter")
    }
})

/*Diferença entre keyup e keydown -> O keydow se repete infinitas vezes se ficar segurando, e o keyup não.*/

//Evento de keyup
document.addEventListener("keyup", function(e){
    if (e.key === "Enter") {
        console.log("Soltou Enter")
    }
})