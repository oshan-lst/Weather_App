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

