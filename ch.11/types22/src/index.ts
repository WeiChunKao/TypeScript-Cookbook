type Person = {
    id: string,
    name: string,
    city: string
};
type Employee = {
    id: string,
    name: string,
    dept: string,
    city: string,
    writeDept: () => void
};

let Employee = function (id: string, name: string, dept: string, city: string) {
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.city = city;
    this.writeDept = function () {
        console.log(`${this.name} works in ${this.dept}`);
    };
};

let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");

let data: (Person | Employee)[] = [
    { id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" },
    salesEmployee
];

data.forEach(item => {
    // if (item instanceof Employee) {
    if ("dept" in item) {
        item.writeDept();
    } else {
        console.log(`${item.id} ${item.name}, ${item.city}`);
    }
});
