//! Destructuring, Object Literal & Template Literals Practice
function addressMaker(address) {
  const { city, state } = address;
  const newAddress = { city, state, country: "India" };

  console.log(newAddress);
}

addressMaker({ city: "Mumbai", state: "Maharashtra" });
