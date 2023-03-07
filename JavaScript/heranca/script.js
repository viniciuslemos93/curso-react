class Product {
    constructor(name, price) {
        this.name = name
        this.price = price        
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100) //Lógica para aplicar o desconto
    }
}

class ProductwithAttributes extends Product {
    constructor(name, price, colors) {
        super(name, price)//Enviando para classe pai, assim não precisa declarar os "this"
        this.colors = colors
    }
    
    showColors() {
        console.log("As cores são:")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }

}

const hat = new ProductwithAttributes("Chapéu", 29.99, ["Preto", "Azul", "Verde"])
console.log(hat.name)
console.log(hat.productWithDiscount(30))
hat.showColors()
