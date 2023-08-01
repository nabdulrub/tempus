import { useState } from "react";
import Clock from "react-live-clock";

const CurrentCard = ({ temp, location }) => {
  const [tempNow] = useState(temp);

  let iconCode = location.weather?.[0]?.icon || null;

  let iconURL = iconCode
    ? `http://openweathermap.org/img/wn/${iconCode}@2x.png`
    : null;

  return (
    <div className="Card">
      <div className="cardHeader">
        <h1>Monday</h1>
        <h1>
          <Clock format={"HH:mm"} ticking={true} timezone={"US/Eastern"} />
        </h1>
      </div>
      <div className="cardInfo">
        <div className="cardWeather">
          <div className="cardDegrees">
            <div>
              <img src={iconURL} alt="" />
            </div>
            <h1>
              {Math.round(temp)}
              <sup>°</sup>
            </h1>
          </div>
        </div>
        <div className="cardExtra">
          <h4>
            <span className="white">Real Feel:</span>{" "}
            {Math.round(location.main?.feels_like)}
            <sup>°</sup>
          </h4>
          <h4>
            <span className="white">Wind:</span>{" "}
            {Math.round(location.wind?.speed)} mph{" "}
          </h4>
          <h4>
            <span className="white">Pressure:</span> {location.main?.pressure}
          </h4>
          <h4>
            <span className="white">Humditity:</span> {location.main?.humidity}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CurrentCard;
