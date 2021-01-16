//! Destructuring arrays, to store them in variable and to avoid repetitive task

let name = ["John", "Jane", "Steve", "Michael", 24, true];

let [firstName, secondName, thirdName, age, isAlive] = name;

console.log(firstName, secondName, thirdName);
