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
        console.log(response)
    })

    console.log(cityName)
    console.log(apiUrl + cityName + apiUrlTwo +apiKey)

})