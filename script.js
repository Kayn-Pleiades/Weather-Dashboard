// When you click the button
$("button").on("click", function(event) {
    event.preventDefault();
    var cityName = $("input").val().trim();
    searchCity(cityName);
})

// Search
function searchCity(city){
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=6eb547b4603918a42c0a7cd6ff63bc26&units=imperial";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

        $("#name").text(response.city.name);
        $("#currentTemp").text("Temperature:   " + response.list[0].main.temp + " °F");
        $("#humidity").text("Humidity:   " + response.list[0].main.humidity + " %");
        $("#windSpeed").text("Wind Speed:   " + response.list[0].wind.speed + " MPH")
        $("#UVIndex").text("UV Index:   " )
    });
}