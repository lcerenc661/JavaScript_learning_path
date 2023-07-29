class Product{
    static productCounter = 0;
    constructor(name, price){
        this._name = name
        this._price = price
        this._idProduct = ++Product.productCounter
    }
    get idProduct(){
        return this._idProduct
    }
    get name(){
        return this._name
    }
    set name(name){
        this._name = name
    }
    get price(){
        return this._price 
    }
    set price(price){
        this._price = price
    }
    toString(){
        return `idProduct: ${this.idProduct}, name: ${this.name}, price: ${this.price} `
    }
}



class Order{
    static orderCounter = 0;
    static get MAX_PRODUCTS (){return 5};
    constructor(products){
        this._products = products
        this._idOrder = ++Order.orderCounter
    };
    addProduct(product){
        this._products.push(product);
        this._productCount = this._products.length

    }
    total(){
        let total = 0
        for (let i=0; i<this._products.length; i++){
            total += this._products[i].price
        }
        return total 
    };
    get productCount(){
        if (this._products.length <= Order.MAX_PRODUCTS){
            let productCount = this._products.length
            return productCount}
        else{
            return ("MAX quantity of products reached")
        }
    }
    get idOrder(){
        return this._idOrder
    }
    showOrder(){
        let products = "";
        for (let product of this._products){
            products += '\n{' + product.toString() + '}';
        }
        

        return products
    }
}
let product1 = new Product('Milk', 2)
let product2 = new Product('Eggs', 3)
let product3 = new Product('Ceral', 3)
let product4 = new Product('chicken', 7)
let product5 = new Product('butter', 7)
console.log(product1.toString())
console.log(product2.toString())

let products = [product1, product2]
let order1 = new Order(products)
console.log(order1.total())
order1.addProduct(product3)
console.log(order1.total())
order1.addProduct(product4)
order1.addProduct(product5)
order1.addProduct(product5)
console.log(order1.productCount)

console.log(order1.showOrder())