//Closure Example
function init() {
    let firstName = "Suyash";

    function sayHello() {
        console.log(`Hello ${firstName}`);
    }

    return sayHello
}

init();


//Closure Example
function addition(x) {
    return function (y) {
        return x + y;
    }
}

let add = addition(5);
console.log(add(5));