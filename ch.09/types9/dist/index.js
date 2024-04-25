function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let hat = ["Hat", 100];
let gloves = ["Gloves", 75];
hat.forEach((h) => {
    if (typeof h === "string") {
        console.log(`String: ${h}`);
    }
    else {
        console.log(`Number: ${h.toFixed(2)}`);
    }
});
let products = [["Hat", 100], ["Gloves", 75]];
let tupleUnion = [true, false, hat, ...products];
tupleUnion.forEach((elem) => {
    if (elem instanceof Array) {
        elem.forEach((tupleElem) => {
            if (typeof tupleElem === "string") {
                console.log(`String Value: ${tupleElem}`);
            }
            else {
                console.log(`Number Value: ${tupleElem}`);
            }
        });
    }
    else if (typeof elem === "boolean") {
        console.log(`Boolean Value: ${elem}`);
    }
});
