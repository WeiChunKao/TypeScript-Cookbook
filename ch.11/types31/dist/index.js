class SportsProduct {
    constructor(name, category, price) {
        this.name = name;
        this.category = category;
        this.price = price;
    }
}
class ProductGroup {
}
let group = new ProductGroup();
group["shoes"] = new SportsProduct("Shoes", "Running", 90.50);
group.hat = new SportsProduct("Hat", "Skiing", 20);
Object.keys(group).forEach(k => {
    console.log(`Property Name: ${k}`);
});
