function getRandomValue() {
    return Math.floor(Math.random() * 4) + 1;
}
var City;
(function (City) {
    City["London"] = "LON";
    City["Paris"] = "PAR";
    City["Chicago"] = "CHI";
})(City || (City = {}));
function getMixedValue() {
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
function getMixedValue2(input) {
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
let result = [["Apples", 100, 2], ["Oranges", true, City.London]];
result.forEach((item) => {
    console.log(`Result: ${item}`);
});
