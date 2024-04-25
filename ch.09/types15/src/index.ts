function getRandomValue(): 1 | 2 | 3 | 4 {
    return Math.floor(Math.random() * 4) + 1 as 1 | 2 | 3 | 4;
}

enum City { London = "LON", Paris = "PAR", Chicago = "CHI" }
function getMixedValue(): 1 | "Hello" | true | City.London {
    switch (getRandomValue()) {
        case 1:
            return 1;
        case 2:
            return "Hello";
        case 3:
            return true;
        case 4:
            return City.London;
    }
}

console.log(`Value: ${getMixedValue()}`);


function getMixedValue2(input: 1): 1;
function getMixedValue2(input: 2 | 3): "Hello" | true;
function getMixedValue2(input: 4): City.London;
function getMixedValue2(input: number): number | string | boolean | City {
    switch (input) {
        case 1:
            return 1;
        case 2:
            return "Hello";
        case 3:
            return true;
        case 4:
        default:
            return City.London;
    }
}

let first = getMixedValue2(1);
let second = getMixedValue2(2);
let third = getMixedValue2(4);
console.log(`${first}, ${second}, ${third}`);


type comboType = 1 | 2 | 3 | City.London;
type comboTupleType = [string, number | boolean, comboType];

let result: comboTupleType[] = [["Apples", 100, 2], ["Oranges", true, City.London]];
result.forEach((item: comboTupleType) => {
    console.log(`Result: ${item}`);
})


