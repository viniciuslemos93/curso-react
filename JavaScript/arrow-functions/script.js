const sum = function (a, b) {
    return a + b
}
//Quando possui apenas uma linha na função, pode remover o return e as chaves.
const arrowSum = (a, b) => a + b 

console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (nome) => {
    if (nome) {
        return `Olá ${nome}!`
    }else {
        return 'Olá'
    }
}

console.log(greeting('João'))
console.log(greeting())

const testeArrow = () => console.log('Testou!')
testeArrow()

const user = {    
    name: 'Theo',
    sayUserName() {
        var self = this
        setTimeout (function() {
            console.log(self)
            console.log(`Username: ${self.name}`)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 700)
    }
}

user.sayUserName()
user.sayUserNameArrow()