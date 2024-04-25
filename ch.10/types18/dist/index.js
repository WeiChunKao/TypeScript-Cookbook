/*
type UnionType = {
    id: number | string,
    name: string
};
*/
let hat = { id: 1, name: "Hat", price: 100 };
let gloves = { id: 2, name: "Gloves", price: 75 };
let umbrella = { id: 3, name: "Umbrella", price: 30 };
let bob = { id: "bsmith", name: "Bob", city: "London" };
let dataItems = [hat, gloves, umbrella, bob];
// let dataItems: UnionType[] = [hat, gloves, umbrella, bob];
dataItems.forEach(item => console.log(`ID: ${item.id}, Name: ${item.name}, Type: ${typeof item}`));
dataItems.forEach(item => {
    if ("city" in item) {
        console.log(`Person: ${item.name}, ${item.city}`);
    }
    else {
        console.log(`Product: ${item.name}, ${item.price}`);
    }
});
function isPerson(testObj) {
    return testObj.city !== undefined;
}
dataItems.forEach(item => {
    if (isPerson(item)) {
        console.log(`Person: ${item.name}: ${item.city}`);
    }
    else {
        console.log(`Product: ${item.name}: ${item.price}`);
    }
});
