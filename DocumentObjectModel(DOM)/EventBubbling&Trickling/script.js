//Event Bubbling
document.querySelector('#grandParent').addEventListener('click', () => {
    console.log("Grand Parent Clicked");
}, false)

document.querySelector('#parent').addEventListener('click', () => {
    console.log("Parent Clicked");
}, false)

document.querySelector('#child').addEventListener('click', () => {
    console.log("Child Clicked");
}, false)


//Event Capturing/Trickling
/* document.querySelector('#grandParent').addEventListener('click', () => {
    console.log("Grand Parent Clicked");
}, false)

document.querySelector('#parent').addEventListener('click', () => {
    console.log("Parent Clicked");
}, false)

document.querySelector('#child').addEventListener('click', () => {
    console.log("Child Clicked");
}, false) */