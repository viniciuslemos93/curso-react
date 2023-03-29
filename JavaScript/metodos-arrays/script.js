//length - retorna o tamanho do array | a quantidade de elementos do array
var arr = [1, 2, 3, 4, 5]
console.log (arr.length)

//push - adiciona elementos no FIM do array
arr.push(8)
arr.push('Qualquer coisa')
console.log (arr)

//pop - remove elementos do FIM do array
arr.pop()
console.log (arr)

//unshift - adiciona elementos no INÍCIO do array
arr.unshift(0)
arr.unshift('Testex')

//shift - remove elementos no INÍCIO do array
arr.shift()
console.log(arr)

//length - 1 | acessar o último elemento do array
console.log(arr[arr.length - 1])

//isArray - verificar se é um array que estamos trabalhando | retornará true ou false
console.log(Array.isArray(arr))
console.log(Array.isArray(15))

//splice - adiciona elemento no meio do array | Syntaxe: splice(índice, quantos quer remover)
var array = [1, 2, 3, 4, 5]
console.log(array)
array.splice(2, 0, 999)
console.log(array)

array.splice(4,1)
console.log(array)

//indexOf - localiza o índice do elemento
console.log(array.indexOf(5))

//join - transformar array em uma String
var arr2 = ["O", "rato", "roeu", "a", "roupa"]
console.log(arr2.join(" "))//No parâmetro vai o separador, neste caso o espaço

//reverse - inverter o array
console.log(arr2.reverse())