function demo() {
  console.log(`Hello`);
}

//This in METHODS
let person = {
  firstName: "Suyash",
  lastName: "Pradhan",
  nickName: "Yash",
  age: 23,
  education: "Graduate",
  jobDesignation: "Software Developer",
  shortBio() {
    const { firstName, lastName, nickName, age } = this;
    return `My Short Bio Is ${firstName} ${lastName} ${nickName} ${age}`;
  },
  fullBio() {
    const {
      firstName,
      lastName,
      nickName,
      age,
      education,
      jobDesignation,
    } = this;
    console.log(
      `My Full Bio Is  ${firstName} ${lastName} ${nickName} ${age} ${education} ${jobDesignation}`
    );
  },
};
console.log(person.shortBio());
console.log(person.fullBio());
