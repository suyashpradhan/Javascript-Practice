//Set Timeout
let setFunct = () => {
    console.log("Function Started");
}
setTimeout(setFunct, 1000);

//Set Interval
let setInter = () => {
    console.log("Function Started");
}
setInterval(setInter, 1000);

//Clear Interval
var intervalId;
var count = 0;

let sayHello = () => {
    count++;
    if (count > 5) {
        clearInterval(intervalId);
    }
    console.log(`Count Started ` + count);
}

intervalId = setInterval(sayHello, 1000);