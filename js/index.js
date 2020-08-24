'use strict'

const weatherDisplay = document.getElementById('weatherDisplay');
const submitFormButton = document.getElementById('submitForm');
const defaultCity = "Atlanta";

console.log(submitFormButton)

const getWeather = (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0ae55bcbeaae633fae083cbaa9bdbfb&units=imperial`;
    get(url).then(function(fetchResponse) {
        weatherDisplay.innerHTML = `Current Temp: ${fetchResponse.main.temp} F`;
        console.log(fetchResponse);
    });
}

submitFormButton.addEventListener('click', function (e) {
    e.preventDefault();
    const cityInput = document.getElementById('locationInput');
    console.log("user city", cityInput)
    const locationName = cityInput.value;
    getWeather(locationName);
});

(function () {
    getWeather(defaultCity);
})();