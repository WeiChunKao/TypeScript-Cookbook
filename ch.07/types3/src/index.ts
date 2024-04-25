function calculateTax(amount: number, format: boolean): string | number | null {
    if (amount === 0) {
        return null;
    }
    const calcAmount = amount * 1.2;
    return format ? `$${calcAmount.toFixed(2)}` : calcAmount;
}

// let taxValue = calculateTax(100, false);
// let taxValue: string | number | null = calculateTax(0, false);
let taxValue: string | number = calculateTax(100, false)!;

/*
if (typeof taxValue === "number") {
    console.log(`Number Value: ${taxValue.toFixed(2)}`);
} else if (typeof taxValue === "string") {
    console.log(`String Value: ${taxValue.charAt(0)}`);
}
*/

switch (typeof taxValue) {
    case "number":
        console.log(`Number Value: ${taxValue.toFixed(2)}`);
        break;
    case "string":
        console.log(`String Value: ${taxValue.charAt(0)}`);
        break;
    default:
        if (taxValue === null) {
            console.log("Value is null");
        } else {
            let value: never = taxValue;
            console.log(`Unexpected type for value: ${value}`);
        }
}

let newResult: unknown = calculateTax(200, false);
let myNumber: number = newResult as number;
console.log(`Number value: ${myNumber.toFixed(2)}`);
