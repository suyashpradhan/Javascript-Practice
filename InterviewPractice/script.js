let buttonEl = document.querySelector("#submit");
let textAreaEl = document.querySelector("#textarea");
let outputEl = document.querySelector("#output");

let apiURL = `https://api.chucknorris.io/jokes/random`;

buttonEl.addEventListener("click", () => {
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      outputEl.innerHTML = `<h2>${data.value}</h2>`;
    });
});
