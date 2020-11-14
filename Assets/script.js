// Initiate search with button click, then pass queryURL data
$("#search-button").on("click", function() {

// Clear any previous current forcast data
$("#current-forecast").empty();

var queryURL = buildQueryURL();
$.ajax({
    url: queryURL,
    method: "GET",
  }).then(weatherSearch);
  // Clear search input after search
  $("#search-input").val("");
})

// Gets input value from city search DOM, then builds queryURL
function buildQueryURL() {
// Get input value from search DOM & trim spaces if necessary
    var searchInput = $("#search-input").val().trim();
    var apiKey = "&appid=1e8fc86a78035a27df9655b63ddec145";
    var units = "&units=imperial";
// Build queryURL with weatherSearch
    var searchURL = `http://api.openweathermap.org/data/2.5/weather?q=${searchInput}${apiKey}${units}`;

    console.log(searchURL);
    return searchURL
}
// Use API data for DOM print
function weatherSearch(weatherData) {
    console.log(weatherData);

// Variables for DOM, to include:
// city name, date, weather conditions icon, temperature, humidity, wind speed & a color coded UV index
    var cityName = weatherData.name;
    var todaysDate = new Date().toLocaleDateString();
    var cityDate = cityName + " (" + todaysDate + ")"
    var temperature = $("<p>").addClass("card-text").text("Temperature: " + weatherData.main.temp + " °F")
    var humidity = $("<p>").addClass("card-text").text("Humidity: " + weatherData.main.humidity + "%")
    var windSpeed = $("<p>").addClass("card-text").text("Wind Speed: " + weatherData.wind.speed + " MPH")

// Render Current Weather API data to DOM elements
    $("#city-today").text(cityDate);
    $("#current-forecast").append(temperature, humidity, windSpeed)
}