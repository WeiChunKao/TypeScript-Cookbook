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
// class DataCollection<T extends { name: string }, U> {
class DataCollection {
    constructor(initialItems) {
        this.items = [];
        this.items.push(...initialItems);
    }
    // collate(targetData: U[], itemProp: string, targetProp: string): (T & U)[] {
    collate(targetData, itemProp, targetProp) {
        let results = [];
        this.items.forEach(item => {
            let match = targetData.find(d => d[targetProp] === item[itemProp]);
            if (match !== undefined) {
                results.push({ ...match, ...item });
            }
        });
        return results;
    }
}
// let peopleData = new DataCollection<Person, City>(people);
export let peopleData = new DataCollection(people);
// let collatedData = peopleData.collate(cities, "city", "name");
export let collatedData = peopleData.collate(cities, "city", "name");
collatedData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.population}`));
export let peopleData2 = new DataCollection(people);
export let empData = peopleData2.collate(employees, "name", "name");
empData.forEach(c => console.log(`${c.name}, ${c.city}, ${c.role}`));
