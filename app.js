
const showWeatherBtn = document.getElementById('show-weather');
const cityInput = document.getElementById('input-city')
const weatherContainer = document.getElementById('weather-container');


showWeatherBtn.addEventListener('click', showWeather);

const CURRENT_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q='

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
<p>Umiditate: ${weather.main.humidity} </p>
<p>Presiune: ${weather.main.pressure} </p>
<p>Temp curenta: ${weather.main.temp}</p>
<p>Temp maxima: ${weather.main.temp_max}</p>
<p>Temp minima: ${weather.main.temp_min}</p>
</div>`
}