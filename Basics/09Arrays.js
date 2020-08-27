var coutries = ['India', 'USA', 'JAPAN'];
var city = new Array("Rajasthan", "Mumbai", "Kolkata");
console.log(city.pop());

//Array Methods
//POP
let arrOne = new Array("One", "Two", "Three", "Four", "Five");
arrOne.pop();
console.log(arrOne);

//Push
let arrTwo = new Array("One", "Two");
arrTwo.push("Three");
console.log(arrTwo);

//Shift
let arrThree = new Array("Train", "Bike", "Cars", "Planes");
arrThree.shift();
console.log(arrThree);

//Unshift
let arrFour = new Array("Train", "Bike", "Cars", "Planes");
arrFour.unshift("PS5", "XBOX");
console.log(arrFour);

//IndexOf
console.log(arrFour.indexOf('PS5'));