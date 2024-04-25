import { Person, Product } from "./dataTypes.js";
function FilterArray(data, predicate) {
    return data.filter(item => predicate(item));
}
function isPerson(item) {
    return item instanceof Person;
}
let dataArray = [
    new Product("Kayak", 275),
    new Person("Bob", "London"),
    new Product("Lifejacket", 27.50)
];
let filteredData = FilterArray(dataArray, isPerson);
filteredData.forEach(item => console.log(`Person: ${item.name}`));
