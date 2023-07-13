function filterProductByCategory(product){
    return function(category){
        return product.filter(product => product.category === category)
    }
}

const products = [
    {name: "Product 1", category: "Electronics"},
    {name: "Product 2", category: "Clothing"},
    {name: "Product 3", category: "Electronics"},
    {name: "Product 4", category: "Decoration"},
]

const filterByCategory = filterProductByCategory(products)
const filteredProduct = filterByCategory("Electronics")

console.log(filteredProduct);