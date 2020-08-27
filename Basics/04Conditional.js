//Operators Basic

var temperature = 24;

if (temperature <= 20) {
    console.log("It's Very Cold Out")
} else {
    console.log("It's Very Hot Out")
}

let email = true;
let facebook = true;
let google = false;

if (email || facebook || google) {
    console.log("Login Success");
}

//Ternary Operator
let authenticator = false;
authenticator ? console.log("Logged In!") : console.log("Error!");

//Swtich Case
let userRole = "SubAdmin";

switch (userRole) {
    case "Admin":
        console.log("Admin")
        break;

    case "SubAdmin":
        console.log("SubAdmin")
        break;

    default:
        console.log("Trial User")
        break;
}