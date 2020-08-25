'use strict'

const submitFormButton = document.getElementById('submitForm');
const defaultCity = "Atlanta";

console.log(submitFormButton)

const getWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0ae55bcbeaae633fae083cbaa9bdbfb&units=imperial`;
    get(url).then(function(fetchResponse) {
        const cityName = document.getElementById('cityName');
        cityName.innerHTML = fetchResponse.name;
        const currentTemp = document.getElementById('currentTemp');
        currentTemp.innerHTML = `Temperature: ${fetchResponse.main.temp} F`;
        const feelsLikeTemp = document.getElementById('feelsLikeTemp');
        feelsLikeTemp.innerHTML = `Feels Like: ${fetchResponse.main.feels_like} F`;
        const currentHumid = document.getElementById('currentHumid');
        currentHumid.innerHTML = `Humidity: ${fetchResponse.main.humidity} %`;
        const currentWind = document.getElementById('currentWind');
        currentWind.innerHTML = `Wind Speed: ${fetchResponse.wind.speed} mph`;
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