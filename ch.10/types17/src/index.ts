enum Feature { Waterproof, Insulated, None }

type Product = {
    name: string,
    price: number,
    feature: Feature,
    hasFeature?(f: Feature): boolean
};

let hat = { name: "Hat", price: 100, feature: Feature.None };
let gloves = { name: "Gloves", price: 75, feature: Feature.Insulated };
let umbrella = {
    name: "Umbrella",
    price: 30,
    feature: Feature.Waterproof,
    hasFeature: function (checkFeature) {
        return this.feature === checkFeature;
    }
};

let shades: Product = {
    name: "Sunglasses", price: 54,
    feature: Feature.None, finish: "mirrored"
};

let products: Product[] = [hat, gloves, umbrella, shades];

products.forEach(prod => console.log(
    `${prod.name}: ${prod.price} `
    // + `, waterproof: ${prod.hasFeature(Feature.Waterproof)}`));
    + `, waterproof: ${prod.hasFeature
        ? prod.hasFeature(Feature.Waterproof) : false}`));
