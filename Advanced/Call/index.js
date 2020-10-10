const nameObjOne = {
    firstName: 'Suyash',
    lastName: 'Pradhan',
    role: 'SuperUser',
    getInfo: function () {
        console.log(`Name Is ${this.firstName} ${this.lastName} and his
        role is ${this.role}`)
    }
}

const nameObjTwo = {
    firstName: 'Meet',
    lastName: 'Lakhani',
    role: 'Sub-Admin',
}

let infoTwo = nameObjOne.getInfo.call(nameObjTwo);
console.log(infoTwo);