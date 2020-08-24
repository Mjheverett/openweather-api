'use strict'

const chuckSays = document.getElementById('chuckSays');
const refreshButton = document.getElementById('refreshQuote');

refreshButton.addEventListener('click', function () {
    const url = "https://api.chucknorris.io/jokes/random?category=dev";
    get(url).then(function(fetchResponse) {
        chuckSays.innerHTML = fetchResponse.value;
    })
})