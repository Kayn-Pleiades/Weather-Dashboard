// When you click the button
$("button").on("click", function(event) {
    event.preventDefault();
    var cityName = $("input").val().trim();
    searchCity(cityName);
})

// Search
function searchCity(city){
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=6eb547b4603918a42c0a7cd6ff63bc26";
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
    });
}