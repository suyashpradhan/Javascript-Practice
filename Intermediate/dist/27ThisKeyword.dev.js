"use strict";

function demo() {
  console.log("Hello");
} //This in METHODS


var person = {
  firstName: "Suyash",
  lastName: "Pradhan",
  nickName: "Yash",
  age: 23,
  education: "Graduate",
  jobDesignation: "Software Developer",
  shortBio: function shortBio() {
    var firstName = this.firstName,
        lastName = this.lastName,
        nickName = this.nickName,
        age = this.age;
    return "My Short Bio Is ".concat(firstName, " ").concat(lastName, " ").concat(nickName, " ").concat(age);
  },
  fullBio: function fullBio() {
    var firstName = this.firstName,
        lastName = this.lastName,
        nickName = this.nickName,
        age = this.age,
        education = this.education,
        jobDesignation = this.jobDesignation;
    console.log("My Full Bio Is  ".concat(firstName, " ").concat(lastName, " ").concat(nickName, " ").concat(age, " ").concat(education, " ").concat(jobDesignation));
  }
};
console.log(person.shortBio());
console.log(person.fullBio()); //This (Invocation Context)

'strict';