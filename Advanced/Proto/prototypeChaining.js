var Info = function (studentName, studentAge) {
    this.studentName = studentName;
    this.studentAge = studentAge;
}

let studentOne = new Info("Suyash", 24);

if (studentOne.hasOwnProperty("studentName")) {
    studentOne.studentName;
}

console.log(studentOne.studentName);