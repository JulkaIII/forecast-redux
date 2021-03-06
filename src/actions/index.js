import axios from "axios";

const API_KEY = "f5a32b45dce3fde1d953d561d654db4a";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ua`;
  const request = axios.get(url);

  console.log("Request: ", request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
