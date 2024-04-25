function correlateData(peopleData, staff) {
    let result = [];
    peopleData.forEach(p => {
        result.push({
            ...p, ...staff.find(e => e.id === p.id)
                || { company: "None", dept: "None", id: p.id }
        });
    });
    return result;
}
let people = [{ id: "bsmith", name: "Bob Smith", city: "London" },
    { id: "ajones", name: "Alice Jones", city: "Paris" },
    { id: "dpeters", name: "Dora Peters", city: "New York" }];
let employees = [{ id: "bsmith", company: "Acme Co", dept: "Sales" },
    { id: "dpeters", company: "Acme Co", dept: "Development" }];
let dataItems = correlateData(people, employees);
/*
dataItems.forEach(item => {
    console.log(`Person: ${item.id}, ${item.name}, ${item.city}`);
    console.log(`Employee: ${item.id}, ${item.company}, ${item.dept}`);
});
*/
function writePerson(per) {
    console.log(`Person: ${per.id}, ${per.name}, ${per.city}`);
}
function writeEmployee(emp) {
    console.log(`Employee: ${emp.id}, ${emp.company}, ${emp.dept}`);
}
dataItems.forEach(item => {
    writePerson(item);
    writeEmployee(item);
});
