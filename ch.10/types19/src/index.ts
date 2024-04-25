type Person = {
    id: string,
    name: string,
    city: string
};
type Employee = {
    id: string,
    company: string,
    dept: string
};

type EmployedPerson = Person & Employee;

function correlateData(peopleData: Person[], staff: Employee[]):
    EmployedPerson[] {
    let result: EmployedPerson[] = []
    peopleData.forEach(
        p => {
            result.push(
                {
                    ...p, ...staff.find(e => e.id === p.id)
                    || { company: "None", dept: "None", id: p.id }
                }
            )
        }
    )
    return result
}

let people: Person[] =
    [{ id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" }];
let employees: Employee[] =
    [{ id: "bsmith", company: "Acme Co", dept: "Sales" },
    { id: "dpeters", company: "Acme Co", dept: "Development" }];

let dataItems: EmployedPerson[] = correlateData(people, employees);

/*
dataItems.forEach(item => {
    console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
    console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}`);
});
*/

function writePerson(per: Person): void {
    console.log(`Person: ${per.id}, ${per.name}, ${per.city}`);
}

function writeEmployee(emp: Employee): void {
    console.log(`Employee: ${emp.id}, ${emp.company}, ${emp.dept}`);
}

dataItems.forEach(item => {
    writePerson(item);
    writeEmployee(item);
});
