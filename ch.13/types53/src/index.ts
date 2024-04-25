import { City, Person, Product, Employee } from "./dataTypes.js";

type Result<T> = T extends (...args: any) => infer R ? R : never;

function processArray<U, Func extends (U) => any>
    (data: U[], func: Func): Result<Func>[] {
    return data.map(item => func(item));
}

let products = [
    new Product("Kayak", 275),
    new Product("Lifejacket", 48.95)
];
let selectName = (p: Product) => p.name

let names: string[] = processArray(products, selectName);
names.forEach(name => console.log(`Name: ${name}`));



function makeObject<T extends new (...args: any) => any>
    (consType: T, ...args: ConstructorParameters<T>): InstanceType<T> {
    return new consType(...args as any[]);
}

let prod: Product = makeObject(Product, "Kayak", 275);
let city: City = makeObject(City, "London", 8136000);
[prod, city].forEach(item => console.log(`Name: ${item.name}`));
