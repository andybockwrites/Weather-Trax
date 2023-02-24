var currentDateEl = $('#currentDate');
var searchedCity = $('#searched-city');
var searchedLinks = $('.past-searches');
var btnClick = $('.search-button')

var todaysTemp = $('.todays-temp');
var todaysWind = $('.todays-wind');
var todaysHum = $('.todays-humidity');

var oneDayDate = $('.one-day-date');
var oneDayTemp = $('one-day-temp');
var oneDayWind = $('.one-day-wind');
var oneDayHum = $('.one-day-humidity');

var twoDaysDate = $('.two-days-date');
var twoDaysTemp = $('two-days-temp');
var twoDaysWind = $('.two-days-wind');
var twoDaysHum = $('.two-days-humidity');

var threeDaysDate = $('.three-days-date');
var threeDaysTemp = $('three-days-temp');
var threeDaysWind = $('.three-days-wind');
var threeDaysHum = $('.three-days-humidity');

var fourDaysDate = $('.four-days-date');
var fourDaysTemp = $('four-days-temp');
var fourDaysWind = $('.four-days-wind');
var fourDaysHum = $('.four-days-humidity');

var fiveDaysDate = $('.five-days-date');
var fiveDaysTemp = $('five-days-temp');
var fiveDaysWind = $('.five-days-wind');
var fiveDaysHum = $('.five-days-humidity');




// Fetch the data from dayJS
displayDate ()
function displayDate() {
    var todaysDate = dayjs().format('MMMM DD, YYYY')
    currentDateEl.text(todaysDate);
    console.log(todaysDate)
};


// Return the inputted data when clicking the search button.
const searchInput = document.querySelector('.search-form');
let submitSearch = function() {
    
    let inputVal = searchBtn.value;
    
    if (inputVal = null) {
        document.alert('Please enter a valid City Name!')
    };
    console.log(inputVal);
};

btnClick.addEventListener('click', submitSearch);




// // Fetch the API from Geo to convert the City Name into Longitude/Latitiude
// // Then use the Lon/Lat to fetch the weather data

const cityFetch = 'http://api.openweathermap.org/geo/1.0/direct?q=' + searchInput + '&limit=1&appid=8b2b86b55e8f31fc929569eb729b63ce';
const weatherFetch = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=8b2b86b55e8f31fc929569eb729b63ce';
console.log(cityFetch);
console.loge(weatherFetch);


function callAPI() {
    
    cityFetchFunct(cityFetch) {
    fetchCity((response) => {
        console.log(cityFetch)
        if (response.ok) {
            response.json().then(function(data){
                console.log(data)
                getWeather(data);
            });
        }
        else {
            window.alert('Please enter a valid city.')
        };
})};
    
    var getCity = function () {
        var queryString = document.location.search;
        var cityName = queryString.split()
        if (city) {
        searchInput.textContent = city;
    
        getWeather(city)
        
        }
    };

    var getWeather = function() {
        
        // Input the Longitude and Latitude into the search perameters
        fetch(weatherFetch)
        
        weatherImage = list.weather.icon;
        tempNow = list.main.temp.imperial;
        console.log(tempNow)
        windNow = list.wind.speed.imperial;
        humNow = list.main.humidity;
        
        
    }};
    
    var weatherData = function (data) {
        
        }
        
        var cityName = data.results.name;
        var lat = data.results.lat;
        var lon = data.results.lon;