let colors = ['green', 'yellow', 'black'];

let func = (a, b, c) => {

    console.log('a', a);
    console.log('b', b);
    console.log('c', c);
}

console.log(func(...colors));

//Spread In Strings
let str = "sds";
console.log(func(...str));



//Spread In Array Literals
let cars = ['BMW', 'AUDI', 'MERC'];
let bikes = ['DUCATI', 'HERO', 'KTM'];
let copyCars = [...cars];
console.table(copyCars);



//Spread in Object Literals
let student = {
    name: 'Suyash',
    age: 23,
    stream: 'Science'
}

let parents = {
    motherName: "Gayatri",
    age: 50,
    relation: "Son Of Suyash Pradhan"
}

let studentInfo = {
    ...student,
    ...parents
}

console.log(studentInfo);