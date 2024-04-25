import { City, Person, Product, Employee } from "./dataTypes.js";

type shapeType = { name: string };

interface Collection<T extends shapeType> {
    add(...newItems: T[]): void;
    get(name: string): T;
    count: number;
}

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

class PersonCollection implements Collection<Person> {
    private items: Person[] = [];

    add(...newItems: Person[]): void {
        this.items.push(...newItems);
    }

    get(name: string): Person {
        return this.items.find(item => item.name === name);
    }

    get count(): number {
        return this.items.length;
    }
}

// let peopleCollection: Collection<Person> = new ArrayCollection<Person>();
let peopleCollection: Collection<Person> = new PersonCollection();
peopleCollection.add(new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York"));
console.log(`Collection size: ${peopleCollection.count}`);

