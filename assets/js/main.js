//  Global Variables
const apiUrl = 'http://api.openweathermap.org/data/2.5/find?q='
const apiUrlTwo = '&units=imperial&appid='
const apiKey = 'cd1c8c05c258a7ae519d0d8a973b7500'
const searchBtn = document.querySelector('#city-btn')

// Search Button
searchBtn.addEventListener('click', e=> {
    event.preventDefault()
    var cityName = document.querySelector('#city-input').value.trim().toLowerCase()
    fetch(apiUrl + cityName + apiUrlTwo + apiKey)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        let currentTemp = Math.floor(response.list[0].main.temp).toString()
        let currentHumidity = Math.floor(response.list[0].main.humidity).toString()
        let currentWind = Math.floor(response.list[0].wind.speed).toString()
        let responseIcon = response.list[0].weather[0].icon
        let cityName = response.list[0].name

        
        var currentCityEl = document.querySelector('#current-city')
        currentCityEl.innerHTML = ''
        currentCityEl.innerHTML = cityName + ' '

        // Place icon in element
        var iconContainerEl = document.querySelector('#current-icon')
        iconContainerEl.innerHTML = ''
        var iconImg = document.createElement('img')
        iconImg.setAttribute('src', 'http://openweathermap.org/img/wn/' + responseIcon + '@2x.png')
        iconContainerEl.appendChild(iconImg)



        console.log(response)

        console.log(cityName)        
        console.log(currentTemp)
        console.log(currentHumidity)
        console.log(currentWind)
        console.log(responseIcon)
    })

    console.log(cityName)
    console.log(apiUrl + cityName + apiUrlTwo +apiKey)

})