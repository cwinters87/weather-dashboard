//  Global Variables
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiUrlTwo = '&units=imperial&appid='
const apiForecast = 'http://api.openweathermap.org/data/2.5/forecast?q='
const apiForecastTwo = '&appid='
const apiKey = 'cd1c8c05c258a7ae519d0d8a973b7500'
const searchBtn = document.querySelector('#city-btn')

// Time Stamps
var date = new Date()
var dayOne = new Date(date)
dayOne.setDate(dayOne.getDate() + 1)
var dayTwo = new Date(date)
dayTwo.setDate(dayTwo.getDate() + 2)
var dayThree = new Date(date)
dayThree.setDate(dayThree.getDate() + 3)
var dayFour = new Date(date)
dayFour.setDate(dayFour.getDate() + 4)
var dayFive = new Date(date)
dayFive.setDate(dayFive.getDate() + 5)

// Formatted Time Stamps
var formattedDate = (date.getMonth()+1) + '/' + date.getDate() + '/' + date.getFullYear()
var formattedDayOne = (dayOne.getMonth()+1) + '/' + dayOne.getDate() + '/' + dayOne.getFullYear()
var formattedDayTwo = (dayTwo.getMonth()+1) + '/' + dayTwo.getDate() + '/' + dayTwo.getFullYear()
var formattedDayThree = (dayThree.getMonth()+1) + '/' + dayThree.getDate() + '/' + dayThree.getFullYear()
var formattedDayFour = (dayFour.getMonth()+1) + '/' + dayFour.getDate() + '/' + dayFour.getFullYear()
var formattedDayFive = (dayFive.getMonth()+1) + '/' + dayFive.getDate() + '/' + dayFive.getFullYear()

// Search Button
searchBtn.addEventListener('click', e=> {
    event.preventDefault()
    var cityName = document.querySelector('#city-input').value.trim().toLowerCase()
    fetch(apiUrl + cityName + apiUrlTwo + apiKey)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        let currentTemp = Math.floor(response.main.temp).toString()
        let currentHumidity = Math.floor(response.main.humidity).toString()
        let currentWind = Math.floor(response.wind.speed).toString()
        let responseIcon = response.weather[0].icon
        let cityName = response.name

        // Render City Name
        var currentCityEl = document.querySelector('#current-city')
        currentCityEl.innerHTML = ''
        currentCityEl.innerHTML = cityName + ' '

        // Render Date
        var currentDateEl = document.querySelector('#current-date')
        currentDateEl.innerHTML = ''
        currentDateEl.innerHTML = formattedDate

        // Render Icon
        var iconContainerEl = document.querySelector('#current-icon')
        iconContainerEl.innerHTML = ''
        var iconImg = document.createElement('img')
        iconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + responseIcon + '@2x.png')
        iconContainerEl.appendChild(iconImg)

        // Render Tempature
        var currentTempEl = document.querySelector('#current-temp')
        currentTempEl.innerHTML = ''
        currentTempEl.innerHTML = currentTemp

        // Render Wind Speed
        var currentWindEl = document.querySelector('#current-wind')
        currentWindEl.innerHTML = ''
        currentWindEl.innerHTML = currentWind

        // Render Humidity
        var currentHumidityEl = document.querySelector('#current-humidity')
        currentHumidityEl.innerHTML = ''
        currentHumidityEl.innerHTML = currentHumidity
    })
    
    // Fetch Forcast
    fetch(apiForecast + cityName + apiForecastTwo + apiKey)
    .then(function(forecastResponse) {
        return forecastResponse.json()
    })
    .then(function(forecastResponse){
        console.log(forecastResponse)
        // Icons
        let dayOneIcon = forecastResponse.list[4].weather[0].icon
        let dayTwoIcon = forecastResponse.list[12].weather[0].icon
        let dayThreeIcon = forecastResponse.list[20].weather[0].icon
        let dayFourIcon = forecastResponse.list[28].weather[0].icon
        let dayFiveIcon = forecastResponse.list[36].weather[0].icon
        // Temps









        console.log(dayOneIcon)
        console.log(dayTwoIcon)
        console.log(dayThreeIcon)
        console.log(dayFourIcon)
        console.log(dayFiveIcon)

    })

})