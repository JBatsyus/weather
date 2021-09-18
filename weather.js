document.addEventListener("DOMContentLoaded", function (event) {
    getWeather('Калининград');


});


function getWeather(city) {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=10216f86ee3575bb463e6ca39c789876&units=metric&lang=ru')
        .then(response => response.json())
        .then(weather => {
            console.log(weather);

            document.querySelector('.city').innerHTML = weather.name;
            document.querySelector('.humi').innerHTML = 'Влажность: ' + weather.main.humidity + ' %';
            document.querySelector('.tempValue').innerHTML = 't: ' + Math.round(weather.main.temp) + ' ℃';
           document.querySelector('.feels_like').innerHTML = 'Комфорт: ' + Math.round(weather.main.feels_like) + ' ℃';
            
            document.querySelector('.wind').innerHTML = 'Ветерок: ' + weather.wind.speed + ' м/с';
            document.querySelector('.weather').innerHTML = weather.weather[0].description;

        })
        .catch(error => console.log(error));

}