function calculateTax(amount, format) {
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}
// let taxNumber: string | number = calculateTax(100, false);
// let taxString: string | number = calculateTax(100, true);
let taxNumber = calculateTax(100, false);
let taxString = calculateTax(100, true);
let taxBoolean = calculateTax(100, false);
console.log(`Number Value: ${taxNumber.toFixed(2)}`);
console.log(`String Value: ${taxString.charAt(0)}`);
console.log(`Boolean Value: ${taxBoolean}`);
