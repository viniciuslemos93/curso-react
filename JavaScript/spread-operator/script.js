const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
//O spread com estes três pontinhos(...) pode unir arrays ou objetos com outros arrays ou objetos.
const a3 = [...a1,...a2]

console.log(a3)

const a4 = [0,...a1, 4]
console.log(a4)

const carName = {name: 'Gol'}
const carBrand = {brand: 'VW'}
const otherInfos = {km: 10000, price: 49500}

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}
console.log(car)