//length - retorna o tamanho do array/string

var nome = "Vinicius"
console.log (nome.length)

var obj = "bola"
console.log (obj.length)

//indexOf - retorna em qual posição do array se inicia determinada palavra que passar no parâmetro.
var frase = "O rato roeu a roupa do rei de Roma"
console.log(frase.indexOf("roeu"))//Resultado = 7, ou seja, a palavra 'roeu' inicia na posição 7 do array/string "frase"

//slice - Remove determinada parte da frase
var roeu = frase.slice(7, 11)

console.log(roeu)

//replace - trocar uma palavra da string, o primeiro parâmetro é a palavra que quer trocar e o segundo a palavra de fato.
var novaFrase = frase.replace("roeu", "teste")
console.log(novaFrase)