let testArr = [1, 2, 34, 56, 78, 98];
console.log(testArr.slice(1, 2));


//Splice
let testArr2 = ['Jan', 'Feb', 'March', 'May'];
testArr2.splice(3, 1, "April")
console.log(testArr2);

let weeks = ['Mon', 'Tues', 'Wed', 'Fri'];
weeks.splice(3, 0, "Thurs");
console.log(weeks);