// 4903edb8b9aa270804ed7b7c3abe786e
// cityname
// cloud icon
// degreeicon number
// wind==
// humidity==

import { config } from "../config";
import { getName } from "i18n-iso-countries";
const countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const getData = async function (cityName) {
  try {
    const dataPromise = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${config.apiKey}`,
      { mode: "cors" }
    );

    const data = await dataPromise.json(); // United States of America
    return {
      error: false,
      cityName: data.name,
      countryName: getName(data.sys.country, "en", { select: "alias" }),
      cloudIcon: data.weather["0"].icon,
      cloud: data.weather["0"].description,
      temp: Number.parseFloat(data.main.temp - 273.15).toFixed(2),
      feels: Number.parseFloat(data.main.feels_like - 273.15).toFixed(2),
      wind: data.wind.speed,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
    };
  } catch (e) {
    return {
      error: true,
    };
  }
};

export { getData };
