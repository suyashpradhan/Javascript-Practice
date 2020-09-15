const collection = document.querySelector('.collection');
const list = document.querySelector('li')[3];


let element = document.createElement('li');
element.innerHTML = "Four"

collection.appendChild(element);
collection.insertBefore(element, list);