//Event Bubbling
document.querySelector('.collection').addEventListener('click', (e => {
    console.log('collection')
}))

document.querySelector('.card').addEventListener('click', (e => {
    console.log('card')
}))

document.querySelector('.container').addEventListener('click', (e => {
    console.log('container')
}))


//Event Delegation
let delItem = document.querySelector('.delete-item');

delItem.addEventListener('click', (e => {

    if (e.target.parentElement.className = 'list') {
        e.target.parentElement.remove();
    }
}))