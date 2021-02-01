let inputEl = document.querySelector("#input");
let messageEl = document.querySelector("#message");
let buttonEl = document.querySelector("#submit");
let outputEl = document.querySelector("#output");

let todos = [];

buttonEl.addEventListener("click", (e) => {
  e.preventDefault();

  let userInput = inputEl.value;
  let userMessage = messageEl.value;

  let results = {
    title: userInput,
    message: userMessage,
  };

  todos.push(results);
  localStorage.setItem("todos", JSON.stringify(todos));

  inputEl.value = "";
  messageEl.value = "";
});

document.addEventListener("DOMContentLoaded", getTodos);

function getTodos() {
  let localData = JSON.parse(localStorage.getItem("todos"));
  localData.map((item) => {
    outputEl.innerHTML = `<h2>${item.title}</h2><p>${item.message}</p>`;
  });
}
