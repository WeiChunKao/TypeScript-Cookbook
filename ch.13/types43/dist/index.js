import { Product } from "./dataTypes.js";
let products = [
    new Product("Running Shoes", 100),
    new Product("Hat", 25)
];
class Collection {
    constructor(initialItems = [], propertyName) {
        this.propertyName = propertyName;
        this.items = new Map();
        this.add(...initialItems);
    }
    add(...newItems) {
        newItems.forEach(newItem => this.items.set(newItem[this.propertyName], newItem));
    }
    get(key) {
        return this.items.get(key);
    }
    get count() {
        return this.items.size;
    }
    [Symbol.iterator]() {
        return this.items.values();
    }
}
let productCollection = new Collection(products, "name");
let itemByKey = productCollection.get("Hat");
console.log(`Item: ${itemByKey.name}, ${itemByKey.price}`);
let productCollection2 = new Collection(products, "price");
itemByKey = productCollection2.get(100);
console.log(`Item: ${itemByKey.name}, ${itemByKey.price}`);
