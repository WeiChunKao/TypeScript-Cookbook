import { City, Person, Product, Employee } from "./dataTypes.js";

type Mapped<T> = {
    [P in keyof T]: T[P]
};

let p: Mapped<Product> = { name: "Kayak", price: 275 };
console.log(`Mapped type: ${p.name}, ${p.price}`);

let c: Mapped<City> = { name: "London", population: 8136000 };
console.log(`Mapped type: ${c.name}, ${c.population}`);



type MakeOptional<T> = {
    [P in keyof T]?: T[P]
};

type MakeRequired<T> = {
    [P in keyof T]-?: T[P]
};

type MakeReadOnly<T> = {
    readonly [P in keyof T]: T[P]
};

type MakeReadWrite<T> = {
    -readonly [P in keyof T]: T[P]
};

// type optionalType = MakeOptional<Product>;
type optionalType = Partial<Product>;

// type requiredType = MakeRequired<optionalType>;
type requiredType = Required<optionalType>;

// type readOnlyType = MakeReadOnly<requiredType>;
type readOnlyType = Readonly<requiredType>;

type readWriteType = MakeReadWrite<readOnlyType>;

let p2: readWriteType = { name: "Kayak", price: 275 };
console.log(`Mapped type: ${p2.name}, ${p2.price}`);
