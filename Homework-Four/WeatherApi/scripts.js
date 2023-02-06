async function getWeatherData(city) {
  const apiKey = "209fee4d37fdc854b4dd1aca323be16f";
  const url = `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&cnt=12&lang=mk&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const submitButton = document.getElementById('searchBtn');
submitButton.addEventListener('click', function () {
  let city = document.getElementById('searchInput').value;
  printWeatherData(city);
});

async function printWeatherData(city) {
  try {
    let data = await getWeatherData(city);
    mainCard(data)
    data.list.forEach(element => {
      // console.log(element.dt);
      element.weather.forEach(weather =>{
        cardCreator(element,weather)

      })
    });

          }
  catch (error) {
    console.log(error + " ERROR IN THE TRY/CATCH BLOCK");
  }
}

function cardCreator(element,weather) {
  let newDiv = document.createElement('div')
  let div = document.getElementById('weatherContainer')
  const time = new Date(element.dt * 1000)
  newDiv.classList = "weather-container-card"
  div.appendChild(newDiv);
  newDiv.innerHTML = '';
  newDiv.innerHTML = `
<div class="weather-container-card__temperature">${Math.floor(element.main.temp)}°</div>
<div class="weather-container-card__description">${weather.description}<br><img src="http://openweathermap.org/img/wn/${weather.icon}@2x.png"></div>
<div class="weather-container-card__humidity"><br><span>Humidity</span><br> ${element.main.humidity}%</div>
<div class="weather-container-card__wind"><span>Wind Speed </span> <br>${Math.floor(element.wind.speed)}km/h</div>
<div class="weather-container-card__data">${time.getHours()}:00</div><br>
<div class="weather-container-card__data">${getDayName(element.dt_txt)}</div>
<div>
`

}
function mainCard(data) {
  // let h1 = document.getElementById("cityHeader")
  // h1.innerText = city;
  let div = document.getElementById('weatherContainer')

  let mainDiv = document.createElement('div')
  mainDiv.classList = "weather_container-card_main"
  div.appendChild(mainDiv)
  mainDiv.innerHTML = '';
  mainDiv.innerHTML = `
  <div class="weather_container-card_main__country">Country: ${data.city.country}</div>
  <div class="weather_container-card_main__city">City: ${data.city.name}</div>
  <div class="weather_container-card_main__timezone">${`Timezone: GMT ${data.city.timezone / 3600}:00 `}</div>
  <div class="weather_container-card_main__population"><span>Population: ${data.city.population}</span><br></div>  
  `
}

function getDayName(dateStr, locale = `en-US`){
  let date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: 'long' });
}

