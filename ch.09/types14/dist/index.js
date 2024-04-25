function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let restrictedValue = 3;
// let restrictedValue: 1 | 2 | 3 = 100;
console.log(`Value: ${restrictedValue}`);
let secondValue = 1;
// let secondValue: 1 | 10 | 100 = 100;
restrictedValue = secondValue;
console.log(`Value: ${restrictedValue}`);
function calculatePrice(quantity, price) {
    return quantity * price;
}
let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);
