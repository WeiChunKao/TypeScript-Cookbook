function calculateTax(amount: number): number {
    return amount * 1.2;
}

function writePrice(product: string, price: number): void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

// enum Product { Hat, Gloves, Umbrella }
// enum Product { Hat, Gloves = 20, Umbrella }
enum OtherEnum { First = 10, Two = 20 }

enum Product { Hat = OtherEnum.First + 1, Gloves = 20, Umbrella = Hat + Gloves };

let products: [Product, number][] = [[Product.Hat, 100], [Product.Gloves, 75]];

[Product.Hat, Product.Gloves, Product.Umbrella].forEach(val => {
    console.log(`Number value: ${val}, type ${typeof val}`);
});

let productValue: Product = 0;
let productName: string = Product[productValue];
console.log(`Value: ${productValue}, Name: ${productName}`)

enum City { London = "London", Paris = "Paris", NY = "New York" }
console.log(`City: ${City.London}`);
console.log(`City: ${City["Paris"]}`);
