//Number Object -- Constructor
const name = 'Suyash';
const nameTwo = new String('John');
console.log(nameTwo);

//Number Object -- Constructor
const numOne = 1;
const numTwo = new Number(2);
console.log(numTwo);

//Boolean Object -- Constructor
const boolOne = true;
const boolTwo = new Boolean(false);
console.log(boolTwo);


//Function Object -- Constructor
let demoFunc = ((x, y) => {
    return x + y;
})

console.log(demoFunc(4, 6));

//Other Way
let demoFunc2 = new Function('x ', 'y', 'return x + y');
console.log(demoFunc2(4, 8));