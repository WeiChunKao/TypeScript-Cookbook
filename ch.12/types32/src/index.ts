import { Person, Product } from "./dataTypes.js";

let people = [
    new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")
];

let products = [
    new Product("Running Shoes", 100),
    new Product("Hat", 25)
];

class DataCollection<T extends (Person | Product)> {
    private items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    getNames(): string[] {
        /*
        return this.items.map(item => {
            if (item instanceof Person || item instanceof Product) {
                return item.name;
            } else {
                return null;
            }
        });
        */
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