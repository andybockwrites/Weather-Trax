currentDateEl = $('#currentDate');
searchedCity = $('#searched-city');
searchedLinks = $('.past-searches')

todaysTemp = $('.todays-temp');
todaysWind = $('.todays-wind');
todaysHum = $('.todays-humidity');

oneDayDate = $('.one-day-date');
oneDayTemp = $('one-day-temp');
oneDayWind = $('.one-day-wind');
oneDayHum = $('.one-day-humidity');

twoDaysDate = $('.two-days-date');
twoDaysTemp = $('two-days-temp');
twoDaysWind = $('.two-days-wind');
twoDaysHum = $('.two-days-humidity');

threeDaysDate = $('.three-days-date');
threeDaysTemp = $('three-days-temp');
threeDaysWind = $('.three-days-wind');
threeDaysHum = $('.three-days-humidity');

fourDaysDate = $('.four-days-date');
fourDaysTemp = $('four-days-temp');
fourDaysWind = $('.four-days-wind');
fourDaysHum = $('.four-days-humidity');

fiveDaysDate = $('.five-days-date');
fiveDaysTemp = $('five-days-temp');
fiveDaysWind = $('.five-days-wind');
fiveDaysHum = $('.five-days-humidity');


// Fetch the data from dayJS
displayDate ()
function displayDate() {
    var todaysDate = dayjs().format('MMMM DD, YYYY')
    currentDateEl.text(todaysDate);
    console.log(todaysDate)
}