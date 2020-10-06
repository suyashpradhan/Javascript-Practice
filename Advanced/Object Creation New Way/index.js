let User = {
    name: "Suyash",
    jobDesignation: "Front-End Developer",
    yearsOfExperience: 2,
    getYearsOfExperience: function () {
        console.log(`Years Of Experience ${this.yearsOfExperience}`)
    }
}

console.log(typeof User)

let userOne = Object.create(User);
console.log(userOne.getYearsOfExperience());