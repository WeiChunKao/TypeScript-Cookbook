import { City, Person, Product, Employee } from "./dataTypes.js";

function getValue<T, K extends keyof T>(item: T, keyname: K): T[K] {
    return item[keyname];
}

let p = new Product("Running Shoes", 100);
console.log(getValue(p, "name"));
console.log(getValue(p, "price"));

let e = new Employee("Bob Smith", "Sales");
console.log(getValue<Employee, "name">(e, "name"));
console.log(getValue<Employee, "role">(e, "role"));