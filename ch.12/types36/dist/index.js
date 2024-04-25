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
}
class SearchableCollection extends DataCollection {
    constructor(initialItems) {
        super(initialItems);
    }
    find(searchTerm) {
        return this.items.filter(item => {
            if (item instanceof Employee) {
                return item.name === searchTerm || item.role === searchTerm;
            }
            else if (item instanceof Person) {
                return item.name === searchTerm || item.city === searchTerm;
            }
        });
    }
}
let employeeData = new SearchableCollection(employees);
employeeData.find("Sales").forEach(e => console.log(`Employee ${e.name}, ${e.role}`));
