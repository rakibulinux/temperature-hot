const API_Key = `SetYourAPIKeyHere`;

const loadTemperature = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
    const res = await fetch(url)
    const data = await res.json()
    displayTemperature(data)
}

const setInnerTextById = (id, text) => {
    const displayTemperatures = document.getElementById(id)
    displayTemperatures.innerText = text
}

const displayTemperature = temperature => {
    setInnerTextById('display-temperature', temperature.main.temp);
    setInnerTextById('condition-status-weather', temperature.weather[0].main);
    // console.log(temperature.main.temp)
}

document.getElementById('search-btn').addEventListener('click', function() {
    console.log("btn click");
    const searchInputField = document.getElementById('search-input');
    const city = searchInputField.value;
    loadTemperature(city);
    const weatherStatusCity = document.getElementById('weather-status-city');
    weatherStatusCity.innerText = city;
})

loadTemperature('kushtia')