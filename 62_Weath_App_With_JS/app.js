// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherApi = {
    key: "3db1004db8a39bdadabe1e468fa3b7ca",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInputBox = document.getElementById('input-box');

//Event listener function on keypress
searchInputBox.addEventListener('keypress', (event) =>{
    if(event.key == 'Enter') {
        console.log(searchInputBox.value);
    }
});



//Get Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}`)
}

//Show Weather Report


//Date manage



