/* O que caracteriza callback é passar para uma função, como argumento, uma outra função
e executar ela durante o código;
 */

function exibir(num) {
    console.log("A operação resultou em: " + num)
}

function soma(a, b, callback) {
    var op = a + b
    callback(op)
}
//Chamando no parâmetro o callback de cb, mesma ideia.
function multiplicacao(a, b, cb) {
    var op = a * b
    cb(op)
}

soma(2, 2, exibir)

multiplicacao(2, 4, exibir)