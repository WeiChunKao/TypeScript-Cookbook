function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let prices = [];
prices.push(...[100, 75, 42, 20]);
let names = ["Hat", "Gloves", "Umbrella", "Sunglasses"];
prices.forEach((price, index) => {
    writePrice(names[index], calculateTax(price));
});
