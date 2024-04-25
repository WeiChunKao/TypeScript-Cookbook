declare enum Feature {
    Waterproof = 0,
    Insulated = 1,
    None = 2
}
declare type Product = {
    name: string;
    price: number;
    feature: Feature;
    hasFeature?(f: Feature): boolean;
};
declare let hat: {
    name: string;
    price: number;
    feature: Feature;
};
declare let gloves: {
    name: string;
    price: number;
    feature: Feature;
};
declare let umbrella: {
    name: string;
    price: number;
    feature: Feature;
    hasFeature: (checkFeature: any) => boolean;
};
declare let shades: Product;
declare let products: Product[];
