function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperature = response.data.temperature.current;

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "b45f1f60e03bf09a01747126fa1o223t";
  let apuUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}
let SearchFormElement = document.querySelector("#search-form");
SearchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Austin");
