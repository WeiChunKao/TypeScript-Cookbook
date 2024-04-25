abstract class Person {
    constructor(public id: string,
        public name: string,
        public city: string) { }

    getDetails(): string {
        return `${this.name}, ${this.getSpecificDetails()}`;
    }

    abstract getSpecificDetails(): string;
}

class Employee extends Person {
    constructor(public readonly id: string,
        public name: string,
        private dept: string,
        public city: string) {
        super(id, name, city);
    }

    getSpecificDetails() {
        return `works in ${this.dept}`;
    }
}

class Customer extends Person {
    constructor(public readonly id: string,
        public name: string,
        public city: string,
        public creditLimit: number) {
        super(id, name, city);
    }

    getSpecificDetails() {
        return `has ${this.creditLimit} limit`;
    }
}

class Supplier {
    constructor(public readonly id: string,
        public name: string,
        public city: string,
        public companyName: string) { }
}

let data: (Person | Supplier)[] = [
    new Employee("fvega", "Fidel Vega", "Sales", "Paris"),
    new Customer("ajones", "Alice Jones", "London", 500),
    new Supplier("dpeters", "Dora Peters", "New York", "Acme")
];

// data.forEach(item => console.log(item.getDetails()));

data.forEach(item => {
    if (item instanceof Person) {
        console.log(item.getDetails());
    } else {
        console.log(`${item.name} works for ${item.companyName}`);
    }
});
