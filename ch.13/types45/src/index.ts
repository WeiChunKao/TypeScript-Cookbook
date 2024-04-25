import { City, Person, Product, Employee } from "./dataTypes.js";

type SelectProperties<T, K extends keyof T> = {
    [P in K]: T[P]
};

type BuiltInMapped<T, K extends keyof T> = Readonly<Partial<Pick<T, K>>>;

let p1: SelectProperties<Product, "name"> = { name: "Kayak" };  // let p1: Pick<Product, "name"> = { name: "Kayak" };
console.log(`Custom mapped type: ${p1.name}`);

let p2: BuiltInMapped<Product, "name" | "price"> = 
    { name: "Lifejacket", price: 48.95 };
console.log(`Built-in mapped type: ${p2.name}, ${p2.price}`);
