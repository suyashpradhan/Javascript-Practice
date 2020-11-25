//! Making Promises
let randomPromise = new Promise((resolve, reject) => {
  let random = Math.floor(Math.random() * 5);

  if (random < 4) {
    resolve();
  } else {
    reject();
  }

  console.log(random);
});

randomPromise
  .then((result) => {
    console.log(result, "Solved");
  })
  .catch((err) => {
    console.log(err, "rejected");
  });

//!using setTimeout
let timingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let random = Math.floor(Math.random() * 5);

    if (random < 4) {
      resolve();
    } else {
      reject();
    }

    console.log(random);
  }, 3000);
});

timingPromise
  .then(() => {
    console.log("Solved");
  })
  .catch((err) => {
    console.log(err, "rejected");
  });
console.log(typeof timingPromise);

//! Returning Promises
const fakeAPI = () => {
  return new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * 5);

    if (random < 4) {
      resolve();
    } else {
      reject();
    }

    console.log(random);
  }, 3000);
};

fakeAPI()
  .then(() => {
    console.log("Solving.............");
  })
  .catch((err) => {
    console.log(err, "Rejecting...............");
  });

console.log(typeof fakeAPI);
