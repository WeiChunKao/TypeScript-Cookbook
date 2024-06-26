let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

function sumPrices(...numbers) {
    return numbers.reduce(
        function (total, val) {
            // return total + val;
            return total +
                (Number.isNaN(Number(val)) ? 0 : Number(val));
        }
    );
}

let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total: ${totalPrice}, ${typeof totalPrice}`);
totalPrice = sumPrices(100, 200, 300);
console.log(`Total: ${totalPrice}, ${typeof totalPrice}`);
totalPrice = sumPrices(100, 200);
console.log(`Total: ${totalPrice}, ${typeof totalPrice}`);
totalPrice = sumPrices(100, 200, undefined, false, "hello");
console.log(`Total: ${totalPrice}, ${typeof totalPrice}`);