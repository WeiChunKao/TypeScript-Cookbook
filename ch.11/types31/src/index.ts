interface Product {
    name: string;
    price: number;
}

class SportsProduct implements Product {
    constructor(public name: string,
        public category: string,
        public price: number) { }
}

class ProductGroup {
    [propertypName: string]: Product;
}

let group = new ProductGroup()
group["shoes"] = new SportsProduct("Shoes", "Running", 90.50);
group.hat = new SportsProduct("Hat", "Skiing", 20);

Object.keys(group).forEach(k => {
    console.log(`Property Name: ${k}`)
});
