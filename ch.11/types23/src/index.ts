type Person = {
    id: string,
    name: string,
    city: string
};

class Employee {
    public readonly id: string;
    public name: string;
    private dept: string;
    public city: string;

    constructor(id: string, name: string, dept: string, city: string) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.city = city;
    }
    
    writeDept() {
        console.log(`${this.name} works in ${this.dept}`);
    }
}

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
// console.log(`Dept value: ${salesEmployee.dept}`);
// salesEmployee.id = "fidel";

let data: (Person | Employee)[] = [
    { id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" },
    salesEmployee
];

data.forEach(item => {
    if (item instanceof Employee) {
        item.writeDept();
    } else {
        console.log(`${item.id} ${item.name}, ${item.city}`);
    }
});
