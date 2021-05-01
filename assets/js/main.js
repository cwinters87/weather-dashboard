//  Global Variables
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiUrlTwo = '&units=imperial&appid='
const apiForecast = 'http://api.openweathermap.org/data/2.5/forecast?q='
const apiForecastTwo = '&units=imperial&appid='
const apiKey = 'cd1c8c05c258a7ae519d0d8a973b7500'
const searchBtn = document.querySelector('#city-btn')
const cityListEl = document.querySelector('#city-list')
let counter = 0


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
    let newCount = counter + 1 
    var cityName = document.querySelector('#city-input').value.trim()
    fetch(apiUrl + cityName + apiUrlTwo + apiKey)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        // Make Variables from the response
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

        // Make Variable from the forecast response
        // Icons
        let dayOneIcon = forecastResponse.list[4].weather[0].icon
        let dayTwoIcon = forecastResponse.list[12].weather[0].icon
        let dayThreeIcon = forecastResponse.list[20].weather[0].icon
        let dayFourIcon = forecastResponse.list[28].weather[0].icon
        let dayFiveIcon = forecastResponse.list[36].weather[0].icon

        // Temps
        let dayOneTemp = Math.floor(forecastResponse.list[4].main.temp).toString()
        let dayTwoTemp = Math.floor(forecastResponse.list[12].main.temp).toString()
        let dayThreeTemp = Math.floor(forecastResponse.list[20].main.temp).toString()
        let dayFourTemp = Math.floor(forecastResponse.list[28].main.temp).toString()
        let dayFiveTemp = Math.floor(forecastResponse.list[36].main.temp).toString()

        // Wind Speeds
        let dayOneWind = Math.floor(forecastResponse.list[4].wind.speed).toString()
        let dayTwoWind = Math.floor(forecastResponse.list[12].wind.speed).toString()
        let dayThreeWind = Math.floor(forecastResponse.list[20].wind.speed).toString()
        let dayFourWind = Math.floor(forecastResponse.list[28].wind.speed).toString()
        let dayFiveWind = Math.floor(forecastResponse.list[36].wind.speed).toString()

        // Humidity Forecast
        let dayOneHumidity = Math.floor(forecastResponse.list[4].main.humidity).toString()
        let dayTwoHumidity = Math.floor(forecastResponse.list[12].main.humidity).toString()
        let dayThreeHumidity = Math.floor(forecastResponse.list[20].main.humidity).toString()
        let dayFourHumidity = Math.floor(forecastResponse.list[28].main.humidity).toString()
        let dayFiveHumidity = Math.floor(forecastResponse.list[36].main.humidity).toString()

        // Render Forecast Dates
            // Day One
        var dayOneDateEl = document.querySelector('#forcast-date1')
        dayOneDateEl.innerHTML = ''
        dayOneDateEl.innerHTML = formattedDayOne
            // Day Two
        var dayTwoDateEl = document.querySelector('#forcast-date2')
        dayTwoDateEl.innerHTML = ''
        dayTwoDateEl.innerHTML = formattedDayTwo
            // Day Three
        var dayThreeDateEl = document.querySelector('#forcast-date3')
        dayThreeDateEl.innerHTML = ''
        dayThreeDateEl.innerHTML = formattedDayThree
            // Day Four
        var dayFourDateEl = document.querySelector('#forcast-date4')
        dayFourDateEl.innerHTML = ''
        dayFourDateEl.innerHTML = formattedDayFour
            // Day Five
        var dayFiveDateEl = document.querySelector('#forcast-date5')
        dayFiveDateEl.innerHTML = ''
        dayFiveDateEl.innerHTML = formattedDayFive
        
        // Render Forecast Icons
            // Day One
        var dayOneIconEl = document.querySelector('#forcast-icon1')
        dayOneIconEl.innerHTML = ''
        var dayOneIconImg = document.createElement('img')
        dayOneIconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + dayOneIcon + '@2x.png')
        dayOneIconEl.appendChild(dayOneIconImg)
            // Day Two
        var dayTwoIconEl = document.querySelector('#forcast-icon2')
        dayTwoIconEl.innerHTML = ''
        var dayTowIconImg = document.createElement('img')
        dayTowIconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + dayTwoIcon + '@2x.png')
        dayTwoIconEl.appendChild(dayTowIconImg)
            // Day Three
        var dayThreeIconEl = document.querySelector('#forcast-icon3')
        dayThreeIconEl.innerHTML = ''
        var dayThreeIconImg = document.createElement('img')
        dayThreeIconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + dayThreeIcon + '@2x.png')
        dayThreeIconEl.appendChild(dayThreeIconImg)
            // Day Four
        var dayFourIconEl = document.querySelector('#forcast-icon4')
        dayFourIconEl.innerHTML = ''
        var dayFourIconImg = document.createElement('img')
        dayFourIconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + dayFourIcon + '@2x.png')
        dayFourIconEl.appendChild(dayFourIconImg)
            // Day Five
        var dayFiveIconEl = document.querySelector('#forcast-icon5')
        dayFiveIconEl.innerHTML = ''
        var dayFiveIconImg = document.createElement('img')
        dayFiveIconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + dayFiveIcon + '@2x.png')
        dayFiveIconEl.appendChild(dayFiveIconImg)

        // Render Forecast Temps
            // Day One
        var dayOneTempEl = document.querySelector('#forcast-temp1')
        dayOneTempEl.innerHTML = ''
        dayOneTempEl.innerHTML = dayOneTemp
            // Day Two
        var dayTwoTempEl = document.querySelector('#forcast-temp2')
        dayTwoTempEl.innerHTML = ''
        dayTwoTempEl.innerHTML = dayTwoTemp
            // Day Three
        var dayThreeTempEl = document.querySelector('#forcast-temp3')
        dayThreeTempEl.innerHTML = ''
        dayThreeTempEl.innerHTML = dayThreeTemp
            // Day Four
        var dayFourTempEl = document.querySelector('#forcast-temp4')
        dayFourTempEl.innerHTML = ''
        dayFourTempEl.innerHTML = dayFourTemp
            // Day Five
        var dayFiveTempEl = document.querySelector('#forcast-temp5')
        dayFiveTempEl.innerHTML = ''
        dayFiveTempEl.innerHTML = dayFiveTemp

        // Render Forecast Wind Speeds
            // Day One
        var dayOneWindEl = document.querySelector('#forcast-wind1')
        dayOneWindEl.innerHTML = ''
        dayOneWindEl.innerHTML = dayOneWind
            // Day Two
        var dayTwoWindEl = document.querySelector('#forcast-wind2')
        dayTwoWindEl.innerHTML = ''
        dayTwoWindEl.innerHTML = dayTwoWind
            // Day Three
        var dayThreeWindEl = document.querySelector('#forcast-wind3')
        dayThreeWindEl.innerHTML = ''
        dayThreeWindEl.innerHTML = dayThreeWind
            // Day Four
        var dayFourWindEl = document.querySelector('#forcast-wind4')
        dayFourWindEl.innerHTML = ''
        dayFourWindEl.innerHTML = dayFourWind
            // Day Five
        var dayFiveWindEl = document.querySelector('#forcast-wind5')
        dayFiveWindEl.innerHTML = ''
        dayFiveWindEl.innerHTML = dayFiveWind

        // Render Forecast Humidity
            // Day One
        var dayOneHumidityEl = document.querySelector('#forcast-humidity1')
        dayOneHumidityEl.innerHTML = ''
        dayOneHumidityEl.innerHTML = dayOneHumidity
            // Day Two
        var dayTwoHumidityEl = document.querySelector('#forcast-humidity2')
        dayTwoHumidityEl.innerHTML = ''
        dayTwoHumidityEl.innerHTML = dayTwoHumidity
            // Day Three
        var dayThreeHumidityEl = document.querySelector('#forcast-humidity3')
        dayThreeHumidityEl.innerHTML = ''
        dayThreeHumidityEl.innerHTML = dayThreeHumidity
            // Day Four
        var dayFourHumidityEl = document.querySelector('#forcast-humidity4')
        dayFourHumidityEl.innerHTML = ''
        dayFourHumidityEl.innerHTML = dayFourHumidity
            // Day Five
        var dayFiveHumidityEl = document.querySelector('#forcast-humidity5')
        dayFiveHumidityEl.innerHTML = ''
        dayFiveHumidityEl.innerHTML = dayFiveHumidity
    })

    
    localStorage.setItem(cityName, cityName)
    displaySavedCities()

})

function displaySavedCities (){
    for(var i =0; i < localStorage.length; i++){
        console.log(localStorage.getItem(localStorage.key(i)));
        var cityNameEl = document.createElement('BUTTON')
        cityNameEl.setAttribute('type', 'button')
        cityNameEl.className ="saved-city"
        cityNameEl.innerHTML = localStorage.getItem(localStorage.key(i))
        cityListEl.appendChild(cityNameEl)    
      }
}

displaySavedCities()
