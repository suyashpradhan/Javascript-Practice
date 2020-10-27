let fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Suyash" },
          { id: 2, username: "John" },
        ],
        "/users/1": {
          id: 1,
          username: "Suyash",
          city: "Mumbai",
          postId: 454,
        },
        "/posts/454": {
          id: 454,
          title: "My First Post",
        },
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
    console.log(result);
    const id = result.data[0].id;
    return fakeRequest(`/users/${id}`);
  })
  .then((result) => {
    console.log(result);
    const postId = result.data.postId;
    return fakeRequest(`/posts/${postId}`);
  })
  .then((result) => {
    console.log(result.data.title);
  })
  .catch((error) => {
    console.log(`Something Failed ${error}`);
  });
