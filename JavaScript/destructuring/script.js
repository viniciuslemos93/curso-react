const fruits = ["Maçã", "Uva", "Laranja"]

const [f1, f2, f3] = fruits
//Destructuring vom arrays
console.log(f3)

//Destructuring vom objetos
const productDetails = {
    name: "Mouse",
    price: "39.99",
    category: "Periféricos",
    color: "Branco"
}

const {name: productName, price, category: productCategory, color } = productDetails

console.log(`O nome do produto é ${productName}, custa ${price}, pertence a categoria ${productCategory} e é da cor ${color}`)