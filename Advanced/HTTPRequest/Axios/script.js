axios
  .get("https://randomuser.me/api/")
  .then(({ data }) => {
    console.log(typeof data);
    let dataObj = data.results;
    dataObj.forEach((el) => {
      console.log(el);
    });
  })
  .catch((err) => {
    console.log("Something went wrong", err);
  });
