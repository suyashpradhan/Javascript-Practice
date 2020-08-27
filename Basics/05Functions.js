function sayHello(name) {
    console.log(`Hello :${name}`);
}

console.log(sayHello('Suyash'));


//Functions Example

let getUserRole = function (name, role) {

    switch (role) {
        case "Admin":
            return `${name} is Admin with all access`;

        case "SubAdmin":
            return `${name} is SubAdmin with all moderate access`;

        case "TestCreator":
            return `${name} is TestCreator with all test access`;

        default:
            return `${name} is Trial User with no access`;
    }
}

console.log(getUserRole('Suyash', ''));