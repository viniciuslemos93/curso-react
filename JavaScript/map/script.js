const products = [
    {name: 'Camisa', price: 10.99, category: 'Roupas'},
    {name: 'Chaleira Elétrica', price: 9.99, category: 'Eletro'},
    {name: 'Fogão', price: 699.99, category: 'Eletro'},
    {name: 'Tênis Nike', price: 150.00, category: 'Roupas'},
]

products.map((product) => {
    if(product.category ==='Roupas') {
        product.onSale = true
    }
})

console.log(products)