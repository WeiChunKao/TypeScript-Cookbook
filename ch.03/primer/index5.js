let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

function sumPrices(first, second, third = 0) {
    return first + second + third;
}

let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total: ${totalPrice}, ${typeof totalPrice}`);
totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice}, ${typeof totalPrice}`);
totalPrice = sumPrices(100, 200);
console.log(`Total: ${totalPrice}, ${typeof totalPrice}`);