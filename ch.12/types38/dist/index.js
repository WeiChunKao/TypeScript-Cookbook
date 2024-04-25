import { Person } from "./dataTypes.js";
/*
class ArrayCollection<T extends shapeType> implements Collection<T> {
    private items: T[] = [];

    add(...newItems: T[]): void {
        this.items.push(...newItems);
    }

    get(name: string): T {
        return this.items.find(item => item.name === name);
    }

    get count(): number {
        return this.items.length;
    }
}
*/
class PersonCollection {
    constructor() {
        this.items = [];
    }
    add(...newItems) {
        this.items.push(...newItems);
    }
    get(name) {
        return this.items.find(item => item.name === name);
    }
    get count() {
        return this.items.length;
    }
}
// let peopleCollection: Collection<Person> = new ArrayCollection<Person>();
let peopleCollection = new PersonCollection();
peopleCollection.add(new Person("Bob Smith", "London"), new Person("Dora Peters", "New York"));
console.log(`Collection size: ${peopleCollection.count}`);
