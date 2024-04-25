function calculateTax(amount: number, discount: number = 0,
    ...extraFees: number[]): number {
    return (amount * 1.2) - discount
        + extraFees.reduce((total, val) => total + val, 0);
}

function writeValue(label: string, value: number): void {
    console.log(`${label}: ${value}`);
}

let taxValue = calculateTax(100, 0);
// console.log(`Tax value: ${taxValue}`);
writeValue("Tax value", calculateTax(100, 0));
