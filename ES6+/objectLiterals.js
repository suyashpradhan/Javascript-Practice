//!Object Literals is used to avoid duplicate key name in an object, let take an example

//? Before ES6
function address(city, state) {
  const addressObj = {
    city: city,
    state: state,
  };

  console.log(addressObj);
}
address("Mumbai", "Maharashtra");

//* Using Object Literals
function name(firstName, lastName) {
  const nameObj = {
    firstName,
    lastName,
  };

  console.log(nameObj);
}

name("John", "Doe");
