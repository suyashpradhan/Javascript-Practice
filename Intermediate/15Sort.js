const months = ["March", "April", "May"];
console.log(months.sort());

//With Compare Function Ascending sort

let number = [12, 34, 65, 45.6, 98.11, 101.8, 22.6, 1000];
let ascSort = number.slice().sort(function (a, b) {
    return a - b;
})
let desSort = number.slice().sort(function (a, b) {
    return b - a;
})


console.log(ascSort);
console.log(desSort);