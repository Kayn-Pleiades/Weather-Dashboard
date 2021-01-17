// Search Storage
var searchHistory = [];

init();

// Get stored values
function init() {
    var storedSearches = JSON.parse(localStorage.getItem("searchHistory"));
    if (storedSearches !== null) {
        searchHistory = storedSearches;
        console.log(searchHistory);
    }
    renderHistory();
    var last = searchHistory[searchHistory.length - 1];
    console.log(last);
}

// Save Search History
function saveSearches() {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}

// Render past searches
function renderHistory() {
    for (i = 0; i < searchHistory.length; i++) {
        var search = searchHistory[i];
        var code = `
            <li> 
                <button type="submit" class="btn"> ${search} </button>
            </li>
        `;
        $("ul").prepend(code);
    }
}

// When you click the past searched places
$("ul").find("button").on("click", function(event) {
    event.preventDefault();
    var city = $(this).text();
    searchCity(city);
})

// When you click the button to search
$("form").find("button").on("click", function(event) {
    event.preventDefault();
    var cityName = $("input").val().trim();
    searchCity(cityName);
    var city = searchHistory.includes(`${cityName}`);
    $("input").val("");
    if (city === false) {
        console.log("new city");
        searchHistory.push(cityName);
        saveSearches();
        var code = `
            <li> 
                <button type="submit" class="btn"> ${cityName} </button>
            </li>
        `;
        $("ul").prepend(code);
    }
    else {
        console.log("this city has been searched before");
    }
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
        $("#UVIndex").html(`UV Index:  <span class="rounded-pill">${response.current.uvi}</span>`);
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
            `;
            key.html(code);
        }
        var uvi = response.current.uvi;
        uviRating(uvi)
    });
}

// Change uvi class based on the value
function uviRating(uvi) {
    if (uvi < 3) {
        $("#UVIndex").find("span").removeClass("orange purple red yellow");
        $("#UVIndex").find("span").addClass("green");
    }
    else if (uvi < 6) {
        $("#UVIndex").find("span").removeClass("green orange purple red");
        $("#UVIndex").find("span").addClass("yellow");
    }
    else if (uvi < 8) {
        $("#UVIndex").find("span").removeClass("green purple red yellow");
        $("#UVIndex").find("span").addClass("orange");
    }
    else if (uvi < 11) {
        $("#UVIndex").find("span").removeClass("green orange purple yellow");
        $("#UVIndex").find("span").addClass("red");
    }
    else {
        $("#UVIndex").find("span").removeClass("green orange red yellow");
        $("#UVIndex").find("span").addClass("purple");
    }
}
