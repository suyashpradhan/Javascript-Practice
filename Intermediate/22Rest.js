function sum(...nums) {
    return nums.reduce((total, curVal) => {
        return total + curVal;
    })
}

console.log(sum(1, 3, 4));

//Storing Remaining Values
function fullName(first, last, ...All) {
    console.log('first', first);
    console.log('last', last);
    console.log('all', ...All);
}

console.log(fullName('Suyash', 'Pradhan', 23, 'Web Developer', 'Mumbai'));

//Using Arrow Functions
let multiply = (...mul) => {
    return mul.reduce((total, curVal) => {
        return total * curVal
    })
}
console.log(multiply(1, 10, 5));