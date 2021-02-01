let buttonEl = document.querySelector("#submit");
let textAreaEl = document.querySelector("#textarea");
let outputEl = document.querySelector("#output");

let apiURL = `https://api.chucknorris.io/jokes/random`;

buttonEl.addEventListener("click", () => {
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => (outputEl.innerHTML = `<h2>${data.value}</h2>`))
    .catch((err) => console.log("data failed", err));
});

function getData(val) {
  console.log(val);
}

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br/>");
}

document.write("<br>");

for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br/>");
}
