import { City, Person, Employee } from "./dataTypes.js";
declare class DataCollection<T extends {
    name: string;
}> {
    private items;
    constructor(initialItems: T[]);
    collate<U>(targetData: U[], itemProp: string, targetProp: string): (T & U)[];
}
export declare let peopleData: DataCollection<Person>;
export declare let collatedData: (Person & City)[];
export declare let peopleData2: DataCollection<Person>;
export declare let empData: (Person & Employee)[];
export {};
