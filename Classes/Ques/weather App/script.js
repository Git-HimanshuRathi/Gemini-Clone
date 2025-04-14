// const APIkey = "56ef47a3a923be898543bf30e0aefd60";
// const APIurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=germany";

// async function getWeather() {
//     const response = await fetch(APIurl + `&appid=${APIkey}`);
//     const data = await response.json();
//     console.log(data);
//     document.getElementById("location").textContent = data.name;
//     document.getElementById("temperature").textContent = Math.round(data.main.temp) + "°C";
// }
// getWeather();

// OpenWeatherMap API key
const apiKey = "YOUR_API_KEY";

// Elements
const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("searchBtn");
const weatherDetails = document.getElementById("weather-details");
const weatherIcon = document.getElementById("weather-icon");
const temperatureEl = document.getElementById("temperature");
const cityNameEl = document.getElementById("city-name");
const humidityEl = document.getElementById("humidity");
const windSpeedEl = document.getElementById("wind-speed");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name.");
  }
});


const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();

    if (data.cod === 200) {
      displayWeather(data);
    } else {
      alert("City not found. Please try again.");
    }
  } catch (error) {
    alert("Error fetching weather data. Please try again later.");
    console.error(error);
  }
};


const displayWeather = (data) => {
  const { name, main, wind, weather } = data;

  cityNameEl.textContent = name;
  temperatureEl.textContent = `${Math.round(main.temp)}°C`;
  humidityEl.textContent = `${main.humidity}% Humidity`;
  windSpeedEl.textContent = `${Math.round(wind.speed)} km/h Wind Speed`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;
  weatherDetails.classList.remove("hidden");
};
