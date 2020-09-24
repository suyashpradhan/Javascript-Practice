//Set Timeout
let text = document.querySelector('#text');

setTimeout(() => {
    console.log(text)
}, 2000);


//Set Interval
let counter = document.querySelector('#counter');
let count = 1;

setInterval(() => {
    if (count < 100) {
        count++;
        counter.innerText = count;
    }
}, 4);

setTimeout(() => {
    alert('Timer Completed')
}, 1000);