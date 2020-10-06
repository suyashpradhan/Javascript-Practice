//Lexical Scope
function init() {
    let firstName = "Suyash";

    function sayHello() {
        console.log(`Hello ${firstName}`);
    }

    sayHello();
}

init();