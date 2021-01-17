# Weather-Dashboard


## Table of Contents

* [Description](#description)
* [Process](#process)
* [Credits](#credits)

## description 

## process

### Commit 1: Initial commit
Created repository on GitHub

### Commit 2: Index
Added base html file for the project. 

### Commit 3: Page Blocking
Blocked out the sections for the webpage. 

### Commit 4: Search Bar Layout
Set up the format for the search bar section.

### Commit 5: Click to search
Started with the js and css. Have it so the term in the input is logged to the console to check that the input is working.

### Commit 6: Fetch weather data
Referencing the activities from class, I now have the code printing the weather data of the searched town to the console.

### Commit 7: Print current weather
The app now prints the current weather details except for uvi. It looks like you need to pay for uvi info?? I will ask in class.

### Commit 8: Switched to Onecall
Learned I can get uvi through onecall, so I get the lat and lon from the first pull and then pull using one call. updated all values to reflect this.

### Commit 9: Map forecast
I am now able to map the next 5 days to cards. Currently it just maps the day temp, as I just wanted to make sure everything is going to the right place. 

### Commit 10: Forecast implimented
Except for the dates, all of the values for the forecasts are now active. I've also added the weather image to the current weather too. 

### Commit 11: Push to array
Searched cities are now pushed to the array.

### Commit 12: Local Storage and preventing duplicates
All searched cities are added to local storage and pulled on a refresh. If the city is already in the array, it will not be re-added. Later I will find a way to instead put it as the most recent item in the array (removing it then re-adding it?)

### Commit 13: Append search history
The stored searches are now listed under the search bar. Next will be to make them into buttons that pull up their data when clicked.

### Commit 14: Specified Button and changed to Prepend
Made the script relating to the search apply to only that button so that it doesn't get messed up I turn the history into buttons. switched from append to prepend so the most recent city is on top. 

### Commit 15: Button sends City
clicking a past search button sends the name of the city to the console. I will now have it use that value to pull up the city's weather value

### Commit 16: Buttons 
buttons now bring up that cities data. new searches get prepended to the top of the list.

### Commit 17: Clear Search
search input field now clears after the search

### Commit 18: UVI
the color of the UVI now changes in relation to the linked safety scale!

### Commit 19: Most recent
logs the most recently searched city to the console so I can next have it auto fill the dashboard.

## credits
https://getbootstrap.com/docs/5.0
https://www.epa.gov/sunsafety/uv-index-scale-0