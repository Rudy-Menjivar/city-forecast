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
// Gets data from variable parameters & search DOM
var queryURL = buildQueryURL();

$.ajax({
    url: queryURL,
    method: "GET",
  });

