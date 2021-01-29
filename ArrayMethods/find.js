//!Returns boolean if finds the particular item
let books = ["The Alchemist", "Range", "Power of Habit"];

let singleBook = books.find((item) => {
  return item.includes("Power");
});

console.log(singleBook);
