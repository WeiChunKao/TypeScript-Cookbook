declare function getRandomValue(): 1 | 2 | 3 | 4;
declare enum City {
    London = "LON",
    Paris = "PAR",
    Chicago = "CHI"
}
declare function getMixedValue(): 1 | "Hello" | true | City.London;
declare function getMixedValue2(input: 1): 1;
declare function getMixedValue2(input: 2 | 3): "Hello" | true;
declare function getMixedValue2(input: 4): City.London;
declare let first: 1;
declare let second: true | "Hello";
declare let third: City.London;
declare type comboType = 1 | 2 | 3 | City.London;
declare type comboTupleType = [string, number | boolean, comboType];
declare let result: comboTupleType[];
