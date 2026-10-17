console.log("Wlecome Live Wether");
//api key
const apiKey = "966b5c40f9bf4c4f8eb105437261210";
const baseUrl = "https://api.weatherapi.com/v1";

fetch(`${baseUrl}/current.json?key=${apiKey}&q=Kalutara`).then(res => res.json()).then(data =>{
    console.log(data);
    
});

//man js api call 

let map;
let marker;


//map loard
function initMap() {
    map = L.map('map').setView([6.5854, 79.9607], 10);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    marker = L.marker([6.5854, 79.9607]).addTo(map);
}


//search button function
function handleSearch(event) {
    event.preventDefault(); 
    
    const cityInput = document.getElementById("cityInput");
    const cityName = cityInput.value.trim();

    if (cityName !== "") {
        getWeather(cityName);
    }
}

//api call data

function getWeather(city) {
    const url = `${baseUrl}/current.json?key=${apiKey}&q=${city}`;
fetch(url)
        .then(res => {
            if (!res.ok) {
                document.getElementById("errorAlert").classList.remove("d-none");
                throw new Error("City not found");
            }
            return res.json();
        })
    .then(data => {
            document.getElementById("errorAlert").classList.add("d-none");
            //html data input
            document.getElementById("locationName").innerText = data.location.name;
            document.getElementById("countryName").innerText = data.location.country;
            document.getElementById("dateTime").innerText = `Local Time: ${data.location.localtime}`;
            document.getElementById("tempC").innerText = `${Math.round(data.current.temp_c)}°C`;
            document.getElementById("conditionText").innerText = data.current.condition.text;
            document.getElementById("humidityVal").innerText = `${data.current.humidity}%`;
            document.getElementById("windVal").innerText = `${data.current.wind_kph} km/h`;

            //weather icon
            const iconImg = document.getElementById("weatherIcon");
            iconImg.src = `https:${data.current.condition.icon}`;
            iconImg.style.display = "inline-block";

            //map change set locaton
            const lat = data.location.lat;
            const lon = data.location.lon;
            
            map.flyTo([lat, lon], 11, { duration: 1.5 });
            marker.setLatLng([lat, lon]);
            marker.bindPopup(`<b>${data.location.name}</b>`).openPopup();
    })
    .catch(error => {
            console.log("Error: ", error);
        });
}
window.onload = ()
initMap();
getWeather("Kalutara");