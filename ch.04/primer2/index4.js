let Product = function (name, price) {
    this.name = name;
    this.price = price;
    this.toString = function () {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    };
};

let hat = new Product("Hat", 100);
let boots = new Product("Boots", 100);
console.log(hat.toString());
console.log(boots.toString());