//!Template Literals

//? Before ES6
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName);

//*Using ES6 Template Literals
fullName = `${firstName} ${lastName}`;
console.log(fullName);
