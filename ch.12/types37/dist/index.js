import { City, Person, Product, Employee } from "./dataTypes.js";
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
let employees = [
    new Employee("Bob Smith", "Sales"),
    new Employee("Alice Jones", "Sales")
];
class DataCollection {
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
    filter(predicate) {
        return this.items.filter(item => predicate(item));
    }
    static reverse(items) {
        return items.reverse();
    }
}
let mixedData = new DataCollection([...people, ...products]);
function isProduct(target) {
    return target instanceof Product;
}
let filteredProducts = mixedData.filter(isProduct);
filteredProducts.forEach(p => console.log(`Product: ${p.name}, ${p.price}`));
let reversedFilteredProducts = DataCollection.reverse(filteredProducts);
reversedFilteredProducts.forEach(p => console.log(`Product: ${p.name}, ${p.price}`));
