const BASE_URL = "https://api.openweathermap.org/"; // Base URL for both APIs
const API_KEY = "59fcd4c2b90c7bf7401ae62baedd174f"; // API key for both APIs
let unit = "imperial"; // The unit to show either Celsius, Fathernheit, etc.

export const fetchPopularCity = async (city) => {
  const response = await fetch(
    `${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit}`
  );
  const data = await response.json();
  return data;
};
