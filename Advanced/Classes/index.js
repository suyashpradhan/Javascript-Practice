class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    fullName() {
        return `My Name is: ${this.firstName} ${this.lastName}`;
    }

    getAge() {
        let diff = Date.now() - this.dob.getTime();
        let age = new Date(diff);
        return Math.abs(age.getUTCFullYear() - 1970)
    }

    //Static Method
    static getNewName(newName) {
        return newName;
    }
}

let info = new Person('Suyash', 'Pradhan', '09-25-1996');

console.log(info.fullName());
console.log(info.getAge());
console.log(Person.getNewName('John'));