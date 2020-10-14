class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullInfo() {
        return `Hello There! ${this.firstName} ${this.lastName} here`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phoneNumber, jobDesgination) {
        super(firstName, lastName);

        this.phoneNumber = phoneNumber;
        this.jobDesgination = jobDesgination;
    }

    static jobInfo(phoneNumber, jobDesgination) {
        return `My Job Designation is ${this.jobDesgination =jobDesgination} you can contact me on my number ${this.phoneNumber =phoneNumber}`;
    }
}

let personOne = new Customer('Suyash', 'Pradhan', '12346789', 'FrontEnd Developer');
console.log(personOne.fullInfo());
console.log(Customer.jobInfo('133233320', 'FrontEnd Developer'));