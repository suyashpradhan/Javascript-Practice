//! For Of Loop

let numbers = [12, 56, 78, 94, 56, 76];

for (const iterator of numbers) {
  console.log(iterator);
}

let str = "Hello World!";
for (const char of str) {
  console.log(char);
}

const students = [
  {
    name: "John",
    city: "New York",
  },
  {
    name: "Peter",
    city: "Paris",
  },
  {
    name: "Kate",
    city: "Sidney",
  },
];

for (const info of students) {
  console.log(`${info.name} lives in ${info.city}`);
}
