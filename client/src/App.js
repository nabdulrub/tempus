import { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Current from "./components/Current/Current";
import "./App.css";
import PopularCity from "./components/Popular/PopularCity";
import BarChart from "./components/BarChart";
import {
  fetchWeatherData,
  fetchForecastData,
  fetchCityName,
} from "./api/weatherApi";
import Geolocation from "./components/Geolocation";
import Map from "./components/CitiesMap/Map";
import _ from "lodash";
import PopularCities from "./sections/PopularCities";

function App() {
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("Bronx");
  const [forcast, setForcast] = useState([]);
  const [rainData, setRainData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [timezone, setTimezone] = useState(null);
  const [unit, setUnit] = useState("imperial");
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  async function fetchWeather() {
    try {
      const weatherData = await fetchWeatherData(city, unit);
      const forcastData = await fetchForecastData(
        weatherData.coord.lat,
        weatherData.coord.lon,
        unit
      );

      setLat(forcastData.lat);
      setLon(forcastData.lon);

      setForcast([]);
      setForcast([...forcastData.daily]);

      setTimezone(forcastData.timezone);

      setLocation(null);
      setLocation(forcastData);

      const hourlyRainData = _.cloneDeep(forcastData.hourly);
      const updatedRainArray = hourlyRainData
        .map((data) => data.rain)
        .filter((rain) => rain !== undefined)
        .map((rain) => Math.round(rain["1h"] * 100));

      setRainData([]);
      setRainData(updatedRainArray);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  useEffect(() => {
    fetchWeather();
  }, []);

  useEffect(() => {
    const getData = setTimeout(() => fetchWeather(), 2000);
    return () => clearTimeout(getData);
  }, [city]);

  useEffect(() => {
    async function fetchCity() {
      if (lat !== null && lon !== null) {
        try {
          const cityNameData = await fetchCityName(lat, lon, unit);
          setCityName(cityNameData);
        } catch (error) {
          console.error("Error fetching city name:", error);
        }
      }
    }

    fetchCity();
  }, [lat, lon]);

  const sevenDayForcast = forcast.slice(1, 7);

  return (
    <div className="bg-white h-[100vh] w-[100vw] p-[50px] flex items-center justify-center">
      <div className="flex flex-col gap-10 rounded-3xl max-w-[1440px] h-full bg-background-color px-[30px] py-[40px] overflow-hidden">
        <header>
          <Navbar
            setCity={setCity}
            city={city}
            cityName={cityName}
            setCityName={setCityName}
            location={location}
            setUnit={setUnit}
          />
        </header>
        <body>
          {location.cod === "404" ? <h1>{location.message}</h1> : null}
          <div className="col-span-3 row-span-1">
            <Current
              location={location}
              sevenDayForcast={sevenDayForcast}
              forcast={forcast}
              timezone={timezone}
            />
          </div>

          <Map />
          <div className="col-start-4 row-span-2">
            <div className="flex flex-col gap-6 ">
              <div className="text-text-white text-2xl">Chance of Rain</div>
              <BarChart rainData={rainData} />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-text-white text-2xl">Popular cities</h2>

              <PopularCities unit={unit} />
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}

export default App;
