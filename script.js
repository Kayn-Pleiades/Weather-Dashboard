// Search Storage
var searchHistory = [];

// When you click the button
$("button").on("click", function(event) {
    event.preventDefault();
    var cityName = $("input").val().trim();
    searchHistory.push(cityName);
    console.log(searchHistory);
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

        $("#currentTemp").text("Temperature:   " + response.current.temp + " °F");
        $("#humidity").text("Humidity:   " + response.current.humidity + " %");
        $("#windSpeed").text("Wind Speed:   " + response.current.wind_speed + " MPH");
        $("#UVIndex").text("UV Index:   " + response.current.uvi);
        $("#currentWeather").find("img").attr("src", `http://openweathermap.org/img/wn/${response.current.weather[0].icon}@2x.png`);

        for ( i = 0; i < 5; i++) {
            var key = $("#" + i);
            var code = `
                <div class="card">
                    <h1></h1>
                    <img src="http://openweathermap.org/img/wn/${response.daily[i].weather[0].icon}@2x.png">
                    <p>Temperature:   ${response.daily[i].temp.day} °F</p>
                    <p>Humidity:   ${response.daily[i].humidity}</p>
                </div>
            `
            key.html(code);
        }
    });
}


