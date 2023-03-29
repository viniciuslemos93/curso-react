let pessoa = {
    nome: "Vinicius",
    idade: 29,

    falar: function() {
        console.log("Olá, tudo bem?")
    },
    somar: function(a, b) {
        return a + b;
    }
};

console.log(pessoa.nome)
pessoa.falar()

var soma = pessoa.somar(5, 10)
console.log(soma)