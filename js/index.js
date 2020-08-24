'use strict'

const chuckSays = document.getElementById('chuckSays');
const refreshButton = document.getElementById('refreshQuote');

function get() {
    //Step 1: fetch the data
    return fetch("https://api.chucknorris.io/jokes/random?category=dev")
    //Step 2: run the json() method from the response
        .then(function(response) {
            return response.json();
        })
    //Step 3: Return the data from the response.json() method
        .then(function(data) {
            return data;
        })
}

(function() {
    get().then(function(fetchResponse) {
        chuckSays.innerHTML = fetchResponse.value;
    })
})();