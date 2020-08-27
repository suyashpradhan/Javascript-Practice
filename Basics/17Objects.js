let phone = {
    modelName: "Iphone XS",
    releasedYear: 2019,
    price: "1000$",
    os: "IOS14",
    manufacturedIn: {
        build: "California",
        otherIndustries: "India"
    },
    features: ["48MP CAMERA", "4GB RAM"]
}

console.table(phone.features);


//Methods In Objects

let user = {
    firstName: "John",
    lastName: "Doe",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length}
        and the courses are ${this.courseList}`
    }
}
user.buyCourse("JAVA");
user.buyCourse(" REACT JS");
user.buyCourse(" ANDROID ");
console.log(user.getCourseCount());


let oneObject = {
    name: "Suyash"
};
let secondObject = {
    name: "Suyash"
};

if (oneObject === secondObject) {
    console.log(true)
} else {
    console.log(false);
}

let arrOne = [];
let arrTwo = [];

if (arrOne === arrTwo) {
    console.log(true)
} else {
    console.log(false);
}