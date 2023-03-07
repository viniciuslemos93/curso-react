/*Aula sobre Var, Let e CONST*/

//O ideal é sempre priorizar por Let e Const, pois é de escopo de bloco.

var x = 10
var y = 15

if (y > 10) {
    var x = 5
console.log(x)
}
console.log(x)

let a = 10
let b = 15
if (b > 10) {
    let a = 5
console.log(a)
}
console.log(a)

let i = 100
for (let i = 0; i < 5; i++ ) {
    console.log(i)
}
console.log(i)

function logName () {
    const name = 'Vinicius'
    console.log(name)
}

const name = 'Ricardo'
logName()
console.log(name)