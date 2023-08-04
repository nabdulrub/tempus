// const BASE_URL = "https://api.openweathermap.org/";
// const API_KEY = "59fcd4c2b90c7bf7401ae62baedd174f";
// let unit = "imperial";

// async function fetchWeather() {
//   const response = await fetch(
//     `${BASE_URL}data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit} `
//   );

//   const data = await response.json();

//   setLocation(data);
//   console.log(location);

//   const oneCallWeatherResponse = await fetch(
//     `${BASE_URL}data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${API_KEY}&units=${unit} `
//   );

//   const oneCallWeatherData = await oneCallWeatherResponse.json();

//   setForcast([...oneCallWeatherData.daily]);
//   console.log(forcast);
// }

// useEffect(() => {
//   fetchWeather();
// }, []);

// useEffect(() => {
//   const getData = setTimeout(() => fetchWeather(), 2000);
//   return () => clearTimeout(getData);
// }, [city]);

// useEffect(() => {
//   setTemp(location.main?.temp);
// }, [location]);

// const sevenDayForcast = forcast.slice(1, 7);