class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
};

function* createProductIterator(...products) {
    for (let product of products) {
        yield product;
    }
};

let generator = createProductIterator(
    new Product("Hat", 100),
    new Product("Boots", 100),
    new Product("Umbrella", 23)
);

/*
let result = generator.next();
while (!result.done) {
    console.log(result.value.toString());
    result = generator.next();
}
*/

[...generator].forEach(p => console.log(p.toString()));