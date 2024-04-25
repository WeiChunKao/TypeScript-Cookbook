import { Person, Product, City } from "./dataTypes.js";
let people = [
    new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")
];
let products = [
    new Product("Running Shoes", 100),
    new Product("Hat", 25)
];
let cities = [
    new City("London", 8136000),
    new City("Paris", 2141000)
];
class DataCollection {
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
    getNames() {
        return this.items.map(item => item.name);
    }
    getItem(index) {
        return this.items[index];
    }
}
let data = new DataCollection(people);
console.log(`Names: ${data.getNames().join(", ")}`);
console.log(`First data: ${data.getItem(0).name}, ${data.getItem(0).city}`);
let data2 = new DataCollection(products);
console.log(`Names: ${data2.getNames().join(", ")}`);
console.log(`First data: ${data2.getItem(0).name}, ${data2.getItem(0).price}`);
let data3 = new DataCollection(cities);
console.log(`Names: ${data3.getNames().join(", ")}`);
console.log(`First data: ${data3.getItem(0).name}, ${data3.getItem(0).population}`);
