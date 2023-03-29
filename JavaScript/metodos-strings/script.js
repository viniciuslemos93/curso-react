//length - retorna o tamanho do array/string

var nome = "Vinicius"
console.log (nome.length)

var obj = "bola"
console.log (obj.length)

//indexOf - retorna em qual posição do array se inicia determinada palavra que passar no parâmetro.
var frase = "O rato roeu a roupa do rei de Roma"
console.log(frase.indexOf("roeu"))//Resultado = 7, ou seja, a palavra 'roeu' inicia na posição 7 do array/string "frase"

//lastIndexOf - retorna em qual posição do array última palavra conforme passado no parâmetro.
var fraseDois = "Eu quero a última palavra teste desta frase teste"
console.log(fraseDois.lastIndexOfndexOf("teste"))

//slice - Remove determinada parte da frase
var roeu = frase.slice(7, 11)

console.log(roeu)

//replace - trocar uma palavra da string, o primeiro parâmetro é a palavra que quer trocar e o segundo a palavra de fato.
var novaFrase = frase.replace("roeu", "teste")
console.log(novaFrase)

//toLowerCase e toUpperCase - Deixando palavras em caixa alta e caixa baixa
var frase = "Esta é a frase que vamos manipular"
console.log(frase.toLowerCase())//Toda a frase em letras minúsculas
console.log(frase.toUpperCase())//Toda a frase em letras maiúsculas

//trim - Limpa os espaços vazios
var nome = "     Vincius     "
var nomeTrim = nome.trim()

console.log(nomeTrim)
console.log(nome)

//split - Transformando um texto em array
console.log(frase.split(" "))//Retorna o array da frase, onde a cada "espaço" tornará uma posição no array.

var tags = "PHP, JavaScript, HTML, CSS"
console.log(tags.split(","))//Retorna o array da frase, onde a cada "vírgula" tornará uma posição no array.
