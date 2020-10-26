//! Creating a promise
let demoPromise = new Promise((resolve, reject) => {
  let random = Math.floor(Math.random() * 5);
  if (random < 4) {
    resolve();
  } else {
    reject();
  }

  console.log(random);
});

//? Then and Catch
demoPromise
  .then((value, onRejected) => {
    console.log(`Promise Resolved`);
  })
  .catch((error) => {
    console.log("Error");
  });

//** Basic Example
let arrPromise = new Promise((resolve, reject) => {
  let arr = ["hello world", "New World"];

  if (arr.includes("hello world")) {
    resolve();
  } else {
    reject();
  }
});

arrPromise
  .then(() => {
    console.log(`Array Matched`);
  })
  .catch(() => {
    console.log(`Something Went Wrong`);
  });
