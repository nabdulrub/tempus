import { useEffect, useState } from "react";
import { DatePicker, Button } from "antd";
import "./App.css";

function App() {
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("New York");
  const [cityName, setCityName] = useState(city);
  const [forcast, setForcast] = useState([]);

  const BASE_URL = "https://api.openweathermap.org/";
  const API_KEY = "59fcd4c2b90c7bf7401ae62baedd174f";

  async function fetchWeather(e) {
    const response = await fetch(
      `${BASE_URL}data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial `
    );

    const data = await response.json();

    const oneCallWeatherResponse = await fetch(
      `${BASE_URL}data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${API_KEY}&units=imperial `
    );

    const oneCallWeatherData = await oneCallWeatherResponse.json();

    console.log("one Call: ", oneCallWeatherData);

    setForcast([...oneCallWeatherData.daily]);
    setTemp(oneCallWeatherData.current.feels_like);
  }

  useEffect(() => {
    fetchWeather();
  }, [temp]);

  return (
    <div className="App">
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <Button onClick={fetchWeather} type="primary">
        Fetch Weather
      </Button>
      <h1>{city}</h1>
      <h1>{temp} F</h1>

      {Object.keys(forcast).map((day, i) => (
        <h2 key={i}>{forcast[day]?.feels_like?.day}</h2>
      ))}
    </div>
  );
}

export default App;
