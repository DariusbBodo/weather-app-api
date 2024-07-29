
const showWeatherBtn = document.getElementById('show-weather');
const cityInput = document.getElementById('input-city')
const weatherContainer = document.getElementById('weather-container');
// for forecast btn
const showForecastBtn = document.getElementById('show-weather-forecast');
const weatherForecastContainer = document.getElementById('weather-forecast');

showWeatherBtn.addEventListener('click', showWeather);

const CURRENT_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q='
//trying to add const for forecast
const FORECAST_WEATHER = 'https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q='

showForecastBtn.addEventListener('click', showForecast);

// adding forecast function
async function showForecast(){
    const city = cityInput.value;
const responsef = await fetch(`${FORECAST_WEATHER} ${city}`);
const weatherf = await responsef.json();

let forecastForInnerHTML = '';

// console.log(weatherf);
// for loop pentru cele 40 elemente din array variabila i
for(let i = 0; i <= weatherf.list.length-1; i++){
const iconCodeF = weatherf.list[i].weather[0].icon;
const iconImageUrlF = `http://openweathermap.org/img/w/${iconCodeF}.png`;
//convertit UNIX time into normal time
const hourF = new Date(weatherf.list[i].dt * 1000);
const tempF = Math.round(weatherf.list[i].main.temp);
const descriptionF = weatherf.list[i].weather[0].description;
console.log(iconCodeF); //folosit pt testari
forecastForInnerHTML += `
<div class="weather-card-container">
                <img src=${iconImageUrlF} />
                
                <p>Ora: ${hourF.toLocaleTimeString("default")}</p>
                <p>Descriere: ${descriptionF}</p>
                <p>Temp curenta: ${tempF} °C</p>
</div>`
console.log(forecastForInnerHTML);
}
weatherForecastContainer.innerHTML = forecastForInnerHTML; 

// weatherForecastContainer.innerHTML = `
// <div>
// <img src=${iconImageUrlF} />
// <p>Ora:${} </p>
// <p>Descriere: ${weather.weather[0].description} </p>
// <p>Temp curenta: ${Math.round(weather.main.temp)}°C</p>
// </div>`
}



async function showWeather(){
const city = cityInput.value;
const response = await fetch(`${CURRENT_WEATHER} ${city}`);
const weather = await response.json();

const iconCode = weather.weather[0].icon;
const iconImageUrl = `http://openweathermap.org/img/w/${iconCode}.png`;


weatherContainer.innerHTML = `
<div>
<img src=${iconImageUrl} />
<p>Descriere: ${weather.weather[0].description} </p>
<p>Umiditate: ${weather.main.humidity}% </p>
<p>Presiune: ${weather.main.pressure} </p>
<p>Temp curenta: ${Math.round(weather.main.temp)}°C</p>
<p>Temp maxima: ${Math.round(weather.main.temp_max)}°C</p>
<p>Temp minima: ${Math.round(weather.main.temp_min)}°C</p>
</div>`
}