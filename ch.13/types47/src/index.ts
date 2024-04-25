import { City, Person, Product, Employee } from "./dataTypes.js";

/*
type resultType<T extends boolean> = T extends true ? string : number;

let firstVal: resultType<true> = "String Value";
let secondVal: resultType<false> = 100;
*/

type references = "London" | "Bob" | "Kayak";

type nestedType<T extends references>
    = T extends "London" ? City : T extends "Bob" ? Person : Product;

let firstVal: nestedType<"London"> = new City("London", 8136000);
let secondVal: nestedType<"Bob"> = new Person("Bob", "London");
let thirdVal: nestedType<"Kayak"> = new Product("Kayak", 275);
