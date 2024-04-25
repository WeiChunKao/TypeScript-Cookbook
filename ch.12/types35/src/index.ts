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

class DataCollection<T extends { name: string }> {
    protected items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }
}

/*
class SearchableCollection<T extends { name: string }> extends 
    DataCollection<T> {
    constructor(initialItems: T[]) {
        super(initialItems);
    }

    find(name: string): T | undefined {
        return this.items.find(item => item.name === name);
    }
}
*/

class SearchableCollection extends DataCollection<Person> {
    constructor(initialItems: Person[]) {
        super(initialItems);
    }

    find(city: string): Person {
        return this.items.find(item => item.city === city);
    }
}

// let peopleData = new SearchableCollection<Person>(people);
let peopleData = new SearchableCollection(people);
// let foundPerson = peopleData.find("Bob Smith");
let foundPerson = peopleData.find("London");
if (foundPerson !== undefined) {
    console.log(`Person ${foundPerson.name}, ${foundPerson.city}`);
}
