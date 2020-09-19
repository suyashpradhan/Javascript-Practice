let datee = new Date();
console.log(datee);

let yr = datee.getFullYear();
let month = datee.getMonth();
let day = datee.getDay();
let hour = datee.getHours();
let seconds = datee.getSeconds();
let milliSeconds = datee.getMilliseconds();

console.log(`Year Is ` + yr + `Month Is:  ` + month + `Day Is: ` + day + `Hour Is: ` + hour + `Seconds Is: ` + seconds + `MilliSeconds Are: ` + milliSeconds);