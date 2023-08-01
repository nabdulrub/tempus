 // const BASE_URL = "https://api.openweathermap.org/";
  // const API_KEY = "59fcd4c2b90c7bf7401ae62baedd174f";
  // let unit = "imperial";

  // async function fetchWeather(e) {
  //   const response = await fetch(
  //     `${BASE_URL}data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial `
  //   );

  //   const data = await response.json();

  //   const oneCallWeatherResponse = await fetch(
  //     `${BASE_URL}data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${API_KEY}&units=${unit} `
  //   );

  //   const oneCallWeatherData = await oneCallWeatherResponse.json();

  //   console.log("one Call: ", oneCallWeatherData);

  //   setForcast([...oneCallWeatherData.daily]);
  //   setTemp(oneCallWeatherData.current.feels_like);
  // }

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetchWeather();
  //   }, 1000);
  // }, [temp]);