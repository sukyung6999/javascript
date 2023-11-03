import { API_KEY } from "./env.js";

const getCurrentWeather = (latitude, longitude) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const icon = document.querySelector('.icon');
            const temp = document.querySelector('.temp');
            const weather = document.querySelector('.weather');
            const city = document.querySelector('.city');

            icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            temp.innerText = `${data.main.temp}°C`;
            weather.innerText = data.weather.description;
            city.innerText = data.name;
        })
}

const getPosition = (position) => {
    const {latitude, longitude} = position.coords;
    getCurrentWeather(latitude, longitude);
}

const errorHandler = () => {
    const noti = document.querySelector('.noti');
    noti.style.display = 'block'; 
} 

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(getPosition, errorHandler);
  } else {
    /* geolocation IS NOT available */
  }