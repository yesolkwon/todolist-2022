const API_KEY = "1f4d19daa12a25f9790b09da51e7b196";
const CurrentWeather = document.querySelector("#weather");
const CurrentLocation = document.querySelector("#location");

function geoOk(position) {
  const lati = position.coords.latitude;
  const long = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${API_KEY}&unit=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      CurrentLocation.innerText = data.name;
      CurrentWeather.innerText = data.weather[0].main;
    });
}

function geoError() {
  alert("Sorry Check your network");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);
