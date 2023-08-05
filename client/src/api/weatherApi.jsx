const BASE_URL = "https://api.openweathermap.org/"; // Base URL for both APIs
const API_KEY = "59fcd4c2b90c7bf7401ae62baedd174f"; // API key for both APIs

export const fetchWeatherData = async (city, unit) => {
  const response = await fetch(
    `${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
  );
  const data = await response.json();
  return data;
};

export const fetchForecastData = async (lat, lon, unit) => {
  const response = await fetch(
    `${BASE_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`
  );
  const data = await response.json();
  return data;
};

export const fetchCityName = async (lat, lon, unit) => {
  const response = await fetch(
    `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`
  );
  const data = await response.json();
  return data;
};

export const fetchGeoLocationData = async (lat, lon, unit) => {
  const response = await fetch(
    `${BASE_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`
  );
  const data = await response.json();
  return data;
};
