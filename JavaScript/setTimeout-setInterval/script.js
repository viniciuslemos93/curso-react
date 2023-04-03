/* O que caracteriza callback é passar para uma função, como argumento, uma outra função
e executar ela durante o código;
 */
//setTimeout
console.log("Antes do setTimeout")

setTimeout(function() {
    console.log("Testando o setTimeout")

}, 2000 )//milisegundos | 1 segundo = 1000 milisegundos

console.log("Depois do setTimeout")

//setInterval
setInterval(function() {
    console.log("Testando o setInterval")    
}, 1000)