/*
let hat = {
    name: "Hat",
    _price: 100,
    priceIncTax: 100 * 1.2,
    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },
    get price() {
        return this._price;
    },
    writeDetails: () =>
        console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`)
};

hat.writeDetails();
hat.price = 120;
hat.writeDetails();
*/

let hat = {
    name: "Hat",
    _price: 100,
    priceIncTax: 100 * 1.2,
    set price(newPrice) {
        this._price = newPrice;
        this.priceIncTax = this._price * 1.2;
    },
    get price() {
        return this._price;
    },
    writeDetails() {
        console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
    }
};

hat.writeDetails = hat.writeDetails.bind(hat);
hat.writeDetails();
hat.price = 120;
hat.writeDetails();
