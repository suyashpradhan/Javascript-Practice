//! USING XHR
function generateJokesFunc() {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const data = JSON.parse(xhr.responseText);

    for (jokes of data.value) {
      console.log(jokes.joke);
    }
  };

  xhr.open("GET", `http://api.icndb.com/jokes/random/2`, true);
  xhr.send();
}
generateJokesFunc();

//? USING FETCH API
fetch("http://aapi.icndb.com/jokes/random/2")
  .then((response) => {
    console.log(response);
    response.json().then((any) => {
      for (jokes of any.value) {
        console.log(jokes.joke);
      }
    });
  })
  .catch((err) => {
    console.log(`error `, err);
  });
