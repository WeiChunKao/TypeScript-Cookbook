let Product = function (name, price) {
    this.name = name;
    this.price = price;
};

Product.prototype.toString = function () {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
};

let TaxedProduct = function (name, price, taxRate) {
    Product.call(this, name, price);
    this.taxRate = taxRate;
    this.getPriceIncTax = function () {
        return Number(this.price) * this.taxRate;
    };
    this.toTaxString = function () {
        return `${this.toString()}, Tax: ${this.getPriceIncTax()}`;
    };
};

TaxedProduct.prototype.toString = function () {
    return Product.prototype.toString.call(this);
};

Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

let hat = new TaxedProduct("Hat", 100, 1.2);
let boots = new Product("Boots", 100);

console.log(hat.toTaxString());
console.log(boots.toString());

console.log(`hat -> TaxedProduct: ${hat instanceof TaxedProduct}`);
console.log(`hat -> Product: ${hat instanceof Product}`);
console.log(`boots -> TaxedProduct: ${boots instanceof TaxedProduct}`);
console.log(`boots -> Product: ${boots instanceof Product}`);