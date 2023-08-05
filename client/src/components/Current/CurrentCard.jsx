import { useState, useEffect } from "react";
import Clock from "react-live-clock";
import "./CurrentCard.css";

const CurrentCard = ({ location, timezone }) => {
  const [Temperature, setTemperature] = useState(location?.main?.temp); //Used to update the tempature state.

  let iconCode = location.weather?.[0]?.icon || null;

  let iconURL = iconCode
    ? `http://openweathermap.org/img/wn/${iconCode}@2x.png`
    : null;

  const currentLocation = location.current;

  useEffect(() => {
    setTemperature(currentLocation?.temp); // Sets the tempature when the city changes to update state.
  }, [location]);

  return (
    <div className="Card">
      <div className="cardHeader">
        <h1>Monday</h1>
        <h1>
          <Clock format={"HH:mm"} ticking={true} timezone={timezone} />
        </h1>
      </div>
      <div className="cardInfo">
        <div className="cardWeather">
          <div className="cardDegrees">
            <div>
              <img src={iconURL} alt="" />
            </div>
            <h1>
              {Math.round(Temperature)}
              <sup>°</sup>
            </h1>
          </div>
        </div>
        <div className="cardExtra">
          <h4>
            <span className="white">Real Feel:</span>{" "}
            {Math.round(currentLocation?.temp)}
            <sup>°</sup>
          </h4>
          <h4>
            <span className="white">Wind:</span>{" "}
            {Math.round(currentLocation?.wind_speed)} mph{" "}
          </h4>
          <h4>
            <span className="white">Pressure:</span> {currentLocation?.pressure}
          </h4>
          <h4>
            <span className="white">Humditity:</span>{" "}
            {currentLocation?.humidity}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CurrentCard;
