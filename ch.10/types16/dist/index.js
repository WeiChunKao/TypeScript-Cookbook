let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = { name: "Umbrella", price: 30, waterproof: true };
let products = [hat, gloves, umbrella];
products.forEach(prod => console.log(`${prod.name}: ${prod.price}, waterproof: ${prod.waterproof}`));
