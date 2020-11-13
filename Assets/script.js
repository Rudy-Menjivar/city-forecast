// Gets input from city search DOM, then builds queryURL
function buildQueryURL() {

// Get input value from search DOM & trim spaces if necessary
    var searchInput = "Sacramento"
    // var searchInput = $("#search-input")
    // .val()
    // .trim();

    var apiKey = "&appid=1e8fc86a78035a27df9655b63ddec145";
// Build queryURL with weatherSearch
    var weatherSearch = "http://api.openweathermap.org/data/2.5/weather?q="
    + searchInput
    + apiKey;

    console.log(weatherSearch);
    return weatherSearch
}
// Use API data for DOM print
function renderWeather(weatherData) {
    console.log(weatherData);

// Create DOM elements with list-group class
    var $currentConditions = $("<ul>");
    $currentConditions.addClass("list-group");

// Append weather details from API to current forecast div
    $("#current-forecast").append($currentConditions);

// Variables for DOM, to include:
// city name, date, weather conditions icon, temperature, humidity, wind speed & a color coded UV index
    var cityName = weatherData.name;
    console.log(cityName);

    var cityName = weatherData.name;
}
// Gets data from variable parameters & search DOM
var queryURL = buildQueryURL();

$.ajax({
    url: queryURL,
    method: "GET",
  }).then(renderWeather);

