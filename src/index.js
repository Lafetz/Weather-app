import { getData } from "./dataHandling";
const displayPrimary = function (city, country, imgSrc, cloudData, temp) {
  const error = document.querySelector(".error");
  error.textContent = "";
  const location = document.getElementById("location");
  const cloud = document.getElementById("cloudData");
  const temprature = document.getElementById("temp");
  temprature.textContent = `${temp}\xB0C`;
  location.textContent = `${city},${country}`;
  cloud.textContent = cloudData;

  displayImg(imgSrc);
};
const displayImg = function (imgSrc) {
  const up = document.querySelector(".up");
  const imgExist = document.querySelector("img");

  if (imgExist !== null) {
    imgExist.remove();
  }

  const img = document.createElement("img");
  img.src = `http://openweathermap.org/img/wn/${imgSrc}@2x.png`;
  up.append(img);
};
const loading = function () {
  const error = document.querySelector(".error");
  error.style.color = "#34d399";
  error.textContent = "Loading...";
};
const displaySecondary = function (feels, wind, humidity, pressure) {
  const feel = document.getElementById("feels");
  const speed = document.getElementById("wind");
  const humidi = document.getElementById("humidity");
  const press = document.getElementById("pressure");
  feel.textContent = `feels like:${feels}\xB0C`;
  speed.textContent = `wind:${wind}m/s`;
  humidi.textContent = `humidity:${humidity}%`;
  press.textContent = `pessure:${pressure}hPa`;
};
const cityNot = function () {
  const imgExist = document.querySelector("img");

  if (imgExist !== null) {
    imgExist.remove();
  }
  const location = document.getElementById("location");
  const img = document.querySelector("img");
  const cloud = document.getElementById("cloudData");
  const temprature = document.getElementById("temp");
  const feel = document.getElementById("feels");
  const speed = document.getElementById("wind");
  const humidi = document.getElementById("humidity");
  const press = document.getElementById("pressure");
  temprature.textContent = "";
  location.textContent = "";
  cloud.textContent = "";
  feel.textContent = "";
  speed.textContent = "";
  humidi.textContent = "";
  press.textContent = "";
  const error = document.querySelector(".error");
  error.style.color = "red";
  error.textContent = "City Not Found";
};
const displaySearch = async function () {
  const input = document.querySelector("input");
  const submit = document.querySelector("button");

  submit.addEventListener("click", async (e) => {
    e.preventDefault();
    loading();
    const weather = await getData(input.value);
    if (weather.error === true) {
      cityNot();
      return;
    }
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
