//Declaring a constructor evoking function
var User = function (firstName, jobDesignation, getYearsOfExperience) {
    this.firstName = firstName;
    this.jobDesignation = jobDesignation;
    this.getYearsOfExperience = getYearsOfExperience;
}

//Declaring a proto for injecting new properties in source object
User.prototype.getYearsOfExperience = () => {
    console.log(`Years Of Experience are : ${this.getYearsOfExperience}`);
}

var userOne = new User("Suyash", "Front-end Developer", "4");
console.log(userOne.getYearsOfExperience);