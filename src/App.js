import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Current from "./components/Current/Current";
import "./App.css";
import ForcastCard from "./components/Forcast/ForcastCard";
import moment from "moment/moment";

function App() {
  const [location, setLocation] = useState("");
  const [temp, setTemp] = useState(location.main?.temp);
  const [city, setCity] = useState("Bronx");
  const [forcast, setForcast] = useState([]);
  const [date, setDate] = useState();

  const BASE_URL = "https://api.openweathermap.org/";
  const API_KEY = "59fcd4c2b90c7bf7401ae62baedd174f";
  let unit = "imperial";

  async function fetchWeather() {
    const response = await fetch(
      `${BASE_URL}data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit} `
    );

    const data = await response.json();

    setLocation(data);
    console.log(location);

    const oneCallWeatherResponse = await fetch(
      `${BASE_URL}data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${API_KEY}&units=${unit} `
    );

    const oneCallWeatherData = await oneCallWeatherResponse.json();

    setForcast([...oneCallWeatherData.daily]);
    console.log(forcast);
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  useEffect(() => {
    const getData = setTimeout(() => fetchWeather(), 2000);
    return () => clearTimeout(getData);
  }, [city]);

  useEffect(() => {
    setTemp(location.main?.temp);
  }, [location]);

  const sevenDayForcast = forcast.slice(1, 7);

  function getDayOfWeek(timestamp) {
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
    const dayOfWeekIndex = date.getDay();

    return daysOfWeek[dayOfWeekIndex];
  }

  return (
    <div className="App">
      <div className="AppContainer">
        <header>
          <Navbar setCity={setCity} city={city} location={location} />
        </header>
        <body>
          {location.cod === "404" ? <h1>{location.message}</h1> : null}
          <Current
            temp={temp}
            location={location}
            sevenDayForcast={sevenDayForcast}
            forcast={forcast}
          />
        </body>
      </div>
    </div>
  );
}

export default App;
