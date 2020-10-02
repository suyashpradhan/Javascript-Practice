//Declaring a constructor evoking function
var User = function (firstName, jobDesignation, yearOfExperience) {
    this.firstName = firstName;
    this.jobDesignation = jobDesignation;
    this.yearOfExperience = yearOfExperience;
}

//Declaring a proto for injecting new properties in source object
User.prototype.yearsOfExperience = function () {
    console.log(`Years Of Experience : ${this.yearOfExperience}`);
}

var userOne = new User('Suyash', 'Front-End Developer', 3);
console.log(userOne.yearsOfExperience());
var userTwo = new User('Soham', 'Territory Sales Manager', 1);
console.log(userTwo.yearsOfExperience());