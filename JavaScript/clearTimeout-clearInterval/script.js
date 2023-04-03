/* O que caracteriza callback é passar para uma função, como argumento, uma outra função
e executar ela durante o código;
 */
//clearTimeout
var x = 0
/*adicionamos a função setTimeout em uma variável (myTimer),
 para ter como passar ele como parâmetro no clearTimeout */
var myTimer = setTimeout(function() {
    console.log("O X é " + x )

}, 1500)//milisegundos | 1 segundo = 1000 milisegundos

x = 5

if (x > 0) {
    clearTimeout(myTimer)
    console.log("O X passou de 0 ")
}

//clearInterval
var myInterval = setInterval(function() {
    console.log("Imprimindo interval")
}, 500)

setTimeout(function() {
    console.log("Não precisamos mais repetir")
    clearInterval(myInterval)
}, 1500)