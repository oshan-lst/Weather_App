console.log("Wlecome Live Wether");

//man js api call 

const apiKey = "966b5c40f9bf4c4f8eb105437261210";
const baseUrl = "https://api.weatherapi.com/v1";
let map;
let marker;

//search button function
function handleSearch(event) {
    event.preventDefault(); 
    
    const cityInput = document.getElementById("cityInput");
    const cityName = cityInput.value.trim();

    if (cityName !== "") {
        getWeather(cityName);
    }
}
//map loard
function initMap() {
    map = L.map('map').setView([6.5854, 79.9607], 10);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
    }).addTo(map);

    marker = L.marker([6.5854, 79.9607]).addTo(map);
}
