let Employee = function (id, name, dept, city) {
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.city = city;
    this.writeDept = function () {
        console.log(`${this.name} works in ${this.dept}`);
    };
};
/*
Employee.prototype.writeDept = function () {
    console.log(`${this.name} works in ${this.dept}`);
};
*/
let salesEmployee = new Employee("fvega", "Fidel Vega", "Sales", "Paris");
let data = [
    { id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" },
    salesEmployee
];
data.forEach(item => {
    // if (item instanceof Employee) {
    if ("dept" in item) {
        item.writeDept();
    }
    else {
        console.log(`${item.id} ${item.name}, ${item.city}`);
    }
});
