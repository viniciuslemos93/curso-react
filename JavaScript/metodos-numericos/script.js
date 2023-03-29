//ParseFloat
console.log(parseFloat('12.999'))
console.log(Number.parseFloat('12.999'))

//ParseInt
console.log(parseInt('10.90'))
console.log(parseInt('12.50'))

//ToFixed
console.log(24.90.toFixed(1))
console.log(20.9085.toFixed(2))

//IsNaN - Not a Number, para verificar se realmente não é número, ele retorna true ou false.
console.log(isNaN("Teste"))
console.log(isNaN("250")) //Neste caso se quiser trabalhar com este número, precisará parsear para número.
console.log(isNaN(240))

//MAX_VALUE e MIN_VALUE
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)