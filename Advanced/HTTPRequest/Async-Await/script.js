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

//!Await keyword with AXIOS
let fakeAPI = async () => {
  const res = await axios.get("https://randomuser.me/api");
  console.log(res.data);
};

fakeAPI().catch((err) => {
  console.log(`Error`, err);
});
