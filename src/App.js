import { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Current from "./components/Current/Current";
import "./App.css";
import PopularCity from "./components/Popular/PopularCity";
import BarChart from "./components/BarChart";
import _ from "lodash";

function App() {
  const rainData = [
    { id: 1, hour: "1 PM", chance: 24 },
    { id: 2, hour: "3 PM", chance: 41 },
    { id: 3, hour: "5 PM", chance: 59 },
    { id: 4, hour: "8 PM", chance: 98 },
  ];

  const [location, setLocation] = useState(""); //Stores the location object from the first API response
  const [temp, setTemp] = useState(location.main?.temp); //Used to update the tempature state.
  const [city, setCity] = useState("Bronx"); //Used to set the new city for search.
  const [forcast, setForcast] = useState([]); //Stores the forcast object from the second API response
  const [rainArray, setRainArray] = useState([]);
  const [rainResponse, setRainResponse] = useState([]);
  const [rainInfo, setRainInfo] = useState({
    labels: "1h",
    datasets: [
      {
        label: "Rain Chance",
        data: rainArray.map((data) => data),
        borderRadius: Number.MAX_VALUE,
        borderWidth: 1,
        borderSkipped: false,
      },
    ],
  });

  const BASE_URL = "https://api.openweathermap.org/"; // Base URL for both APIs
  const API_KEY = "59fcd4c2b90c7bf7401ae62baedd174f"; // API key for both APIs
  let unit = "imperial"; // The unit to show either Celsius, Fathernheit, etc.

  async function fetchWeather() {
    setRainArray([]);

    if (!location) {
      setLocation((prevLocation) => prevLocation);
    }

    const response = await fetch(
      `${BASE_URL}data/2.5/weather?q=${city}&appid=${API_KEY}&units=${unit} `
    ); // Fetch the TODAY's weather using the CITY

    const data = await response.json(); // Store the response in the data variable

    setLocation(data); // set the response to the location state variable
    console.log(location);

    const forcastResponse = await fetch(
      `${BASE_URL}data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${API_KEY}&units=${unit} `
    ); // Fetch the weather FORCAST using the second API by grabbing the lat and lon from the first API

    const forcastData = await forcastResponse.json(); // Store the response in the forcastData variable

    setForcast([...forcastData.daily]); // set the response to the forcast state variable

    const currentRain = _.cloneDeep(forcastData.hourly); // Deep copy of the array
    const rainChances = [currentRain.map((data) => data.rain)];

    const updatedRainArray = [];
    for (let i = 0; i < rainChances[0].length; i++) {
      if (rainChances[0][i] !== undefined) {
        updatedRainArray.push(rainChances[0][i]["1h"] * 100);
      }
    }
    setRainArray(updatedRainArray);

    console.log(rainResponse);
  }

  useEffect(() => {
    // Update rainInfo when rainArray changes
    setRainInfo({
      labels: ["1h", "2h", "3h"],
      datasets: [
        {
          label: "Rain Chance",
          data: rainArray.map((data) => data),
        },
      ],
    });
  }, [rainArray]);

  useEffect(() => {
    fetchWeather(); // Fetches the weather on once the website is visited
  }, []);

  useEffect(() => {
    const getData = setTimeout(() => fetchWeather(), 2000);
    return () => clearTimeout(getData); // Fetches the weather 2 seconds after a user searches for a new location.
  }, [city]);

  useEffect(() => {
    setTemp(location.main?.temp); // Sets the tempature when the city changes to update state.
    setRainResponse(rainArray);
  }, [location]);

  const sevenDayForcast = forcast.slice(1, 7);
  // Slices off the next six days from the responses to avoid showing the current weather as part of the forcast.

  return (
    <div className="App">
      <div className="AppContainer">
        <header>
          <Navbar setCity={setCity} city={city} location={location} />
        </header>
        <body>
          {location.cod === "404" ? <h1>{location.message}</h1> : null}
          <div className="current">
            <Current
              temp={temp}
              location={location}
              sevenDayForcast={sevenDayForcast}
              forcast={forcast}
            />
          </div>
          <div className="popular flex flex-col gap-6">
            <div className="flex flex-col gap-6">
              <div className="text-text-white text-2xl">Chance of Rain</div>
              <BarChart chartData={rainInfo} />
            </div>
            <div className="text-text-white text-2xl">Popular cities</div>
            <div className="flex flex-col gap-4">
              <PopularCity
                country="Yemen"
                city="Aden"
                currently="Rain"
                cityImg="http://openweathermap.org/img/wn/10d@2x.png"
                degrees="90"
              />
              <PopularCity
                country="Yemen"
                city="Aden"
                currently="Rain"
                cityImg="http://openweathermap.org/img/wn/10d@2x.png"
                degrees="90"
              />
              <PopularCity
                country="Yemen"
                city="Aden"
                currently="Rain"
                cityImg="http://openweathermap.org/img/wn/10d@2x.png"
                degrees="90"
              />
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}

export default App;
