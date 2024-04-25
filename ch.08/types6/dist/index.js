function calculateTax(amount, discount = 0, ...extraFees) {
    return (amount * 1.2) - discount
        + extraFees.reduce((total, val) => total + val, 0);
}
function writeValue(label, value) {
    console.log(`${label}: ${value}`);
}
let taxValue = calculateTax(100, 0);
// console.log(`Tax value: ${taxValue}`);
writeValue("Tax value", calculateTax(100, 0));
