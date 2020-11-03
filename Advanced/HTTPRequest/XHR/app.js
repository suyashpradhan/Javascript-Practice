let collection = document.querySelector('.collection');

//Instantiating XMLHttpRequest using new keyword
const firstRequest = new XMLHttpRequest();

//Event Listener for loading and main logic
firstRequest.addEventListener('load', () => {
    console.log('Success');
    const data = JSON.parse(firstRequest.responseText);
    console.log(typeof data);

    for (let planets of data.results) {
        let lis = document.createElement('li');
        lis.innerHTML = planets.name;
        lis.classList.add('list');
        collection.appendChild(lis);
    }
})

//Event Listener if something goes wrong
firstRequest.addEventListener('error', () => {
    console.log('Failed Request');
})

//
firstRequest.open('GET', 'https://swapi.dev/api/planets/');
firstRequest.send();

//https://api.chucknorris.io/jokes/random