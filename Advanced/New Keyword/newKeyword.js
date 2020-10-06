//Declaring a constructor evoking function
var User = function (firstName, jobDesignation) {
    this.firstName = firstName;
    this.jobDesignation = jobDesignation;
}

var userOne = new User('Suyash', 'Front-End Developer');
var userTwo = new User('Soham', 'Territory Sales Manager');
console.log(userOne, typeof userOne, userTwo, typeof userTwo);