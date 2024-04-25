import { City, Product } from "./dataTypes.js";
function processArray(data, func) {
    return data.map(item => func(item));
}
let products = [
    new Product("Kayak", 275),
    new Product("Lifejacket", 48.95)
];
let selectName = (p) => p.name;
let names = processArray(products, selectName);
names.forEach(name => console.log(`Name: ${name}`));
function makeObject(consType, ...args) {
    return new consType(...args);
}
let prod = makeObject(Product, "Kayak", 275);
let city = makeObject(City, "London", 8136000);
[prod, city].forEach(item => console.log(`Name: ${item.name}`));
