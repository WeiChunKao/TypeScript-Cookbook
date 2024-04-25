function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
// enum Product { Hat, Gloves, Umbrella }
// enum Product { Hat, Gloves = 20, Umbrella }
var OtherEnum;
(function (OtherEnum) {
    OtherEnum[OtherEnum["First"] = 10] = "First";
    OtherEnum[OtherEnum["Two"] = 20] = "Two";
})(OtherEnum || (OtherEnum = {}));
var Product;
(function (Product) {
    Product[Product["Hat"] = 11] = "Hat";
    Product[Product["Gloves"] = 20] = "Gloves";
    Product[Product["Umbrella"] = 31] = "Umbrella";
})(Product || (Product = {}));
;
let products = [[Product.Hat, 100], [Product.Gloves, 75]];
[Product.Hat, Product.Gloves, Product.Umbrella].forEach(val => {
    console.log(`Number value: ${val}, type ${typeof val}`);
});
let productValue = 0;
let productName = Product[productValue];
console.log(`Value: ${productValue}, Name: ${productName}`);
var City;
(function (City) {
    City["London"] = "London";
    City["Paris"] = "Paris";
    City["NY"] = "New York";
})(City || (City = {}));
console.log(`City: ${City.London}`);
console.log(`City: ${City["Paris"]}`);
