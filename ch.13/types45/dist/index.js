let p1 = { name: "Kayak" };
// let p1: Pick<Product, "name"> = { name: "Kayak" };
console.log(`Custom mapped type: ${p1.name}`);
let p2 = { name: "Lifejacket", price: 48.95 };
// let p2: Pick<Product, "name" | "price"> = { name: "Lifejacket", price: 48.95 };
console.log(`Built-in mapped type: ${p2.name}, ${p2.price}`);
export {};
