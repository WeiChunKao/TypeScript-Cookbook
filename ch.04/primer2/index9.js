class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

function createProductIterator(...products) {
    let index = 0;
    return {
        next() {
            if (index < products.length) {
                return { value: products[index++], done: false }
            } else {
                return { value: undefined, done: true }
            }
        }
    }
}

let iterator = createProductIterator(
    new Product("Hat", 100),
    new Product("Boots", 100),
    new Product("Umbrella", 23)
);

let result = iterator.next();
while (!result.done) {
    console.log(result.value.toString());
    result = iterator.next();
}
