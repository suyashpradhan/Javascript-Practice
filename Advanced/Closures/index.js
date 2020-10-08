//Closure Example
function init() {
    let firstName = "Suyash";

    function sayHello() {
        console.log(`Hello ${firstName}`);
    }

    return sayHello
}

init();