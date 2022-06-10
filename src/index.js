import { getData } from "./dataHandling";
const displayPrimary = function (city, country, imgSrc, cloudData, temp) {
  const location = document.getElementById("location");
  const img = document.querySelector("img");
  const cloud = document.getElementById("cloudData");
  const temprature = document.getElementById("temp");
  temprature.textContent = `${temp}\xB0C`;
  location.textContent = `${city},${country}`;
  img.src = `http://openweathermap.org/img/wn/${imgSrc}@2x.png`;
  cloud.textContent = cloudData;
};
const displaySecondary = function (feels, wind, humidity, pressure) {
  const feel = document.getElementById("feels");
  const speed = document.getElementById("wind");
  const humidi = document.getElementById("humidity");
  const press = document.getElementById("pressure");
  feel.textContent = `feels like ${feels}\xB0C`;
  speed.textContent = `wind:${wind}m/s`;
  humidi.textContent = `humidity:${humidity}%`;
  press.textContent = `pessure ${pressure}hPa`;
};
const displaySearch = async function () {
  const input = document.querySelector("input");
  const submit = document.querySelector("button");

  submit.addEventListener("click", async (e) => {
    e.preventDefault();
    const weather = await getData(input.value);
    displayPrimary(
      weather.cityName,
      weather.countryName,
      weather.cloudIcon,
      weather.cloud,
      weather.temp
    );
    displaySecondary(
      weather.feels,
      weather.wind,
      weather.humidity,
      weather.pressure
    );
  });
};
displaySearch();
