async function getData() {
  return `Hello World`;
}
console.log(getData());

async function addNumber(x, y) {
  if (typeof x !== "number" && typeof x !== "number") {
  } else {
    return x + y;
  }
}

addNumber(7, 4)
  .then((res) => {
    console.log("Promise Resolved with :", res);
  })
  .catch((err) => {
    console.log("Promise Rejected with :", err);
  });

async function randomUser() {
  const response = await fetch("https://randomuser.me/api/");
  const randomData = await response.json();
  console.log(randomData);
}

randomUser().catch((err) => {
  console.log(err);
});
