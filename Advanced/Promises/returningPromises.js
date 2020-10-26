let arrPromise = () => {
  return new Promise((resolve, reject) => {
    let arr = ["hello world", "New World"];
    if (arr.includes("hello world")) {
      resolve();
    } else {
      reject();
    }
  });
};

arrPromise()
  .then(() => {
    console.log("Match Found");
  })
  .catch(() => {
    console.log("Nothing Matched");
  });
