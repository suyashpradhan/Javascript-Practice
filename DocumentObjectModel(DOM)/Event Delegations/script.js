document.querySelector('.collection').addEventListener('click', (e => {

    if (e.target.className = 'list') {
        window.location.href = " / " + e.target.id;
    }


}));

document.querySelector('#form').addEventListener('keyup', (e => {
    if (e.target.dataset.uppercase != undefined) {
        e.target.value = e.target.value.toUpperCase();
    }

    console
}))