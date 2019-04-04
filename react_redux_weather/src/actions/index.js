import axios from 'axios';

const API_KEY = '9aaffe2aab4bde34bc8f970a2cebc944';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// constant declared type for the action, to not risk typos
export const FETCH_WEATHER = 'FETCH_WEATHER';

// action creator to fetch weather API
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url); //axios returns a "promise"

  /* redux promise: middleware to allow to return a "promise", redux will automatically wait for this promise to resolve
  /* usually needed for ajax requests
  */
  return {
    type: FETCH_WEATHER,
    payload: request // contain additional data
  }
}
