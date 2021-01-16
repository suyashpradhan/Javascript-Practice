//! Destructuring objects, to store them in variable and to avoid repetitive task

let obj = {
  name: "John Doe",
  age: 24,
  designation: "Web Engineer",
  interests: {
    game: "Football",
    music: "Instrumental",
  },
};

//? Repetitive task
console.log(obj.name);
console.log(obj.age);
console.log(obj.interests.game);

//* Using Destructuring
let {
  name,
  age,
  designation,
  interests: { game, music },
} = obj;
console.log(
  `${name}'s age is ${age} and his a ${designation}. His areas of interests are ${game} & ${music}`
);
