const input = document.querySelector("#task");
const button = document.querySelector("#submit");

button.addEventListener("click", (e) => {
  let inputValue = input.value;

  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(inputValue);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem("tasks"));

tasks.forEach((el) => {
  console.log(el);
});
