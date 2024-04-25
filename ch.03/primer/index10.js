
let hat = {
    name: "Hat",
    price: 100
};
// hat = {};

let propertyCheck = hat.price || 0;
let objectAndPropertyCheck = (hat || {}).price || 0;
console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`);
