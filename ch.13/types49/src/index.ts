import { City, Person, Product, Employee } from "./dataTypes.js";

type Filter<T, U> = T extends U ? T : never;

function FilterArray<T, U>(data: T[], predicate: (item) => item is U)
    : Filter<T, U>[] {
    return data.filter(item => predicate(item)) as any;
}

function isPerson(item: any): item is Person {
    return item instanceof Person;
}

let dataArray = [
    new Product("Kayak", 275),
    new Person("Bob", "London"),
    new Product("Lifejacket", 27.50)
];

let filteredData: Person[] = FilterArray(dataArray, isPerson);
filteredData.forEach(item => console.log(`Person: ${item.name}`));