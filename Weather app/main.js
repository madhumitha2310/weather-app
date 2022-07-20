
var searchCity = document.querySelector('.location-search');
var inputCityValue = document.querySelector('.location-search input');
var cityName = document.querySelector('.city-name p');
var cityCountry = document.querySelector('.city-name span');
var iconContainer = document.querySelector('.icon-container');
var cardBody = document.querySelector('.card-body');
var cardBack = document.querySelector('.card-back');

// temperature conversion from kelvin to celcious

var temperatureConversion = (kelvin) => {
    celcius = Math.round (kelvin - 272.15);
    return celcius;
}


updateWeather = (city) => {
	console.log(city);
	 var imageName = city.weather[0].icon;
   var iconSrc = `https://openweathermap.org/img/wn/${imageName}@2x.png`  //icon source URL from 'openweathermap.org'
	
  cityName.textContent = city.name;
	iconContainer.innerHTML=`
	        <div class="icon-container">
            <img src="${iconSrc}" alt="" />
          </div>
          `
	cityCountry.textContent = city.sys.country;
	cardBody.innerHTML =`
    <div class="card-middle row">
        <div class="col-9 text-center temp">
              <span>${temperatureConversion(city.main.temp)}&deg;C</span>
              <p class="weather-condition">${city.weather[0].description}</p>
        </div>

        <div class="col-10 weather-condition-temp">
              
              <p class="high"> Max: ${temperatureConversion(city.main.temp_max)}&deg;C</p>
              <p class="low">Min:  ${temperatureConversion(city.main.temp_min)}&deg;C</p>
              <p class="hum">Humidity : ${city.main.humidity}%</p>
              <p class="clouds">clouds: ${city.clouds.all}%</p>
        </div>
    </div>
          
    <div class="card-bottom px-6 py-4 row">
        <div class="col text-center">
            <p> ${temperatureConversion(city.main.feels_like)}%</p>
            <span>feels like</span>
        </div>
        <div class="col text-center">
            <p> ${city.wind.speed}kmph</p>
            <span>wind speed</span>
        </div>
        <div class="col text-center">
            <p> ${city.main.pressure}</p>
            <span>pressure</span>
        </div>
    </div>
`;

  cardBack.classList.remove('d-none');   // To hide HTML content initially
}

  searchCity.addEventListener('submit', e => {
    e.preventDefault();
    var citySearched = inputCityValue.value.trim();
    console.log(citySearched);
    searchCity.reset();
  reqestCity(citySearched)
     .then((data) => {
     updateWeather(data);
   })
   .catch((error) => 
     {
      var ifConnected = window.navigator.onLine;
        if (ifConnected) 
        {
          alert ('Please type a valid city name');
        }
        else
        {
          alert('Please check your internet connection');
        }
      })

  })