let weatherApiUrl ='https://api.weather.gov/gridpoints/MPX/116,72/forecast'

let forecastTableElement = document.querySelector('#weatherTable')

// make a request to the api
// fetch returns is a promise

fetch(weatherApiUrl).then(response => {

    // after getting the data, return the data in the json format
    let jsonProcessingPromise = response.json()

    return jsonProcessingPromise
}).then(processedJson => {
    console.log(processedJson)
    let forecastProperties = processedJson.properties
    console.log(forecastProperties)
    let forecastArray = forecastProperties.periods


    console.log(forecastArray)
    forecastArray.forEach(forecast => {

        let tableRowElement = document.createElement('tr')
        console.log(forecast)
        let timePeriod = forecast.name
        console.log(timePeriod)

        let timePeriodElement = document.createElement('td')
        timePeriodElement.innerText = timePeriod

        tableRowElement.appendChild(timePeriodElement)

        let tempratureText = forecast.temprature

        let tempratureTdElement = document.createElement('td')
        tempratureTdElement.innerText = tempratureText
        tableRowElement.appendChild(tempratureTdElement)




        forecastTableElement.appendChild(tableRowElement)
    })
})