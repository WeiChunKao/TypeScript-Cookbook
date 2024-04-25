function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

// enum Product { Hat, Gloves, Umbrella };
const enum Product { Hat, Gloves, Umbrella };

let productValue: Product = Product.Hat;
console.log(productValue);

productValue = Product["Gloves"];
console.log(productValue);

// let productName: string = Product[2];
// console.log(productName);