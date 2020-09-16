let button = document.querySelector('#submit');
button.addEventListener('click', function (e) {

    document.body.style.backgroundColor = 'red';
    e.preventDefault();
})