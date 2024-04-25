class Product {
    constructor(name, price, supplier) {
        this.id = Symbol();
        this.name = name;
        this.price = price;
        this.supplier = supplier;
    }
};

let acmeProducts = [
    new Product("Hat", 100, "Acme"),
    new Product("Boots", 100, "Acme")
];
let zoomProducts = [
    new Product("Hat", 75, "Zoom"),
    new Product("Boots", 125, "Zoom")
];

let products = new Map();
[...acmeProducts, ...zoomProducts].forEach(p => products.set(p.id, p));
// console.log(products);

products.forEach(p => {
    if (p["supplier"] == "Zoom") {
        console.log(`Name: ${p.name}, Price: ${p.price}, Supplier: ${p.supplier}`)
    }
})