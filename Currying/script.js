//!Currying

function myName(name) {
  return function greetingFunction(greet) {
    return name + greet;
  };
}
let result = myName("Suyash says ")("hello");
console.log(result);

//*Currying Example Using ES6
const myName = (name) => (greet) => {
  console.log(`${greet} ${name}`);
};

myName("Suyash");
myName("Suyash")("Hello!");
