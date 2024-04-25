class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
};

class GiftPack {
    constructor(name, ...products) {
        this.name = name;
        this.products = products
    }

    getTotalPrice() {
        return this.products.reduce((total, p) => total + p.price, 0);
    }

    *getGenerator() {
        for (let product of this.products) {
            yield product;
        }
    }
};

let winter = new GiftPack(
    "winter",
    new Product("Hat", 100),
    new Product("Boots", 80),
    new Product("Gloves", 23)
);

console.log(`Total price: ${winter.getTotalPrice()}`);
[...winter.getGenerator()].forEach(p => console.log(`Product: ${p}`));
