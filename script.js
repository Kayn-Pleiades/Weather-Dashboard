// Search Storage
var history = [];

// When you click the button
$("button").on("click", function(event) {
    event.preventDefault();
    var cityName = $("input").val().trim();
    searchCity(cityName);
})

// Get coord
function searchCity(city){
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=6eb547b4603918a42c0a7cd6ff63bc26&units=imperial";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        $("#name").text(response.name);
        coord(lat,lon);
    });
}

// Search Onecall
function coord(lat,lon){
    var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&appid=6eb547b4603918a42c0a7cd6ff63bc26&units=imperial";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

        $("#currentTemp").text("Temperature:   " + response.current.temp + " °F");
        $("#humidity").text("Humidity:   " + response.current.humidity + " %");
        $("#windSpeed").text("Wind Speed:   " + response.current.wind_speed + " MPH");
        $("#UVIndex").text("UV Index:   " + response.current.uvi);

        for ( i = 0; i < 5; i++) {
            console.log(response.daily[i].temp.day);
            var key = $("#" + i);
            key.find("h1").text(response.daily[i].temp.day);
        }
    });
}


