var Feature;
(function (Feature) {
    Feature[Feature["Waterproof"] = 0] = "Waterproof";
    Feature[Feature["Insulated"] = 1] = "Insulated";
    Feature[Feature["None"] = 2] = "None";
})(Feature || (Feature = {}));
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
let shades = {
    name: "Sunglasses", price: 54,
    feature: Feature.None, finish: "mirrored"
};
let products = [hat, gloves, umbrella, shades];
products.forEach(prod => console.log(`${prod.name}: ${prod.price} `
    // + `, waterproof: ${prod.hasFeature(Feature.Waterproof)}`));
    + `, waterproof: ${prod.hasFeature
        ? prod.hasFeature(Feature.Waterproof) : false}`));
