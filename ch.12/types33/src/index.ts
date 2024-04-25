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

class DataCollection<T extends { name: string }> {
    private items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    getNames(): string[] {
        return this.items.map(item => item.name);
    }

    getItem(index: number): T {
        return this.items[index];
    }
}

let data = new DataCollection<Person>(people);
console.log(`Names: ${data.getNames().join(", ")}`);
console.log(`First data: ${data.getItem(0).name}, ${data.getItem(0).city}`);

let data2 = new DataCollection<Product>(products);
console.log(`Names: ${data2.getNames().join(", ")}`);
console.log(`First data: ${data2.getItem(0).name}, ${data2.getItem(0).price}`);

let data3 = new DataCollection<City>(cities);
console.log(`Names: ${data3.getNames().join(", ")}`);
console.log(`First data: ${data3.getItem(0).name}, ${data3.getItem(0).population}`);