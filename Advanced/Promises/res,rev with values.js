let fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Suyash" },
          { id: 2, username: "John" },
        ],
        "/about": "This is about page!",
      };

      const data = pages[url];
      if (data) {
        resolve({
          status: 200,
          data,
        });
      } else {
        reject({
          status: 400,
        });
      }
    }, 1000);
  });
};

fakeRequest("/users")
  .then((result) => {
    console.log("Status Code ", result.status);
    console.log("Data", result.data);
    console.log("Request Worked!");
  })
  .catch((err) => {
    console.log(`Status Code ${err.status}`);
    console.log(`Request Failed`);
  });
