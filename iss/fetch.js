// let's work on our javascript

//assign a variable for our url

let url = 'https://api.wheretheiss.at/v1/satellites/25544'

// let's also find our latitude and longitude elements from the html

let issLat = document.querySelector('#iss-lat')

let issLong = document.querySelector('#iss-long')

let issTimeUpdatedFetched = document.querySelector('#time')

let update = 10000

let issMarker

// add an icon
let issIcon = L.icon({
    iconUrl: 'iss_icon.png',
    iconSize:[50, 50],
    iconAnchor: [25, 25]
})


let map = L.map('iss-map').setView([0,0], 1)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// we call our iss function for the first time
iss()
// we can use set interval to call the function every 10 second
setInterval(iss, update) // assign a variable for the time update
// now we can use the fetch function here
// we need the data to refresh every 10 second
// so we can create a function called iss

function iss(){
    fetch(url).then(res=>{
        return res.json()
    }).then((issData)=>{
        console.log(issData)

        // here after we got our latitude and longitude data, we should add it to our html

        let lat = issData.latitude
        let long = issData.longitude

        issLat.innerHTML = lat
        issLong.innerHTML = long

        // add a marker to our map
        // check if there is no a marker, then add a marker
        if(!issMarker){
            issMarker = L.marker([lat, long], {icon: issIcon}).addTo(map)
            // right now the marker is not moving, we need to make the marker move
        }else{
            issMarker.setLatLng([lat, long])
        }
        // add the time where the updated is made
        let now = Date()

        issTimeUpdatedFetched.innerHTML = `the data was fetched at ${now}`


    }).catch(err=>{
        console.log('ERROR',err)
})}