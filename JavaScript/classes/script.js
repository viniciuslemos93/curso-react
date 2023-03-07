class Product {
    constructor(name, price) {
        this.name = name
        this.price = price        
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100) //Lógica para aplicar o desconto
    }
}

const shirt = new Product("Camisa Gola V", 20)

console.log(shirt.name)
console.log(shirt.productWithDiscount(50))

console.log(shirt.productWithDiscount(10))

const tenis = new Product("Nike", 450)
console.log(tenis.name)
console.log("Valor de " + tenis.price)
console.log("Valor com 20% de desconto: " + tenis.productWithDiscount(20))