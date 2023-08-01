import React from "react";
import CurrentCard from "./CurrentCard";
import "./Current.css";
import ForcastCard from "../Forcast/ForcastCard";

const Current = ({ temp, location, sevenDayForcast, forcast }) => {
  const Tabs = ["Today", "Tomorrow", "Next 7 Days"];

  function getDayOfWeek(timestamp) {
    const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
    const dayOfWeekIndex = date.getDay();

    return daysOfWeek[dayOfWeekIndex];
  }

  return (
    <div className="currentContainer">
      <div className="currentTabs">
        {Tabs.map((tab, idx) => (
          <button key={idx} className="currentButton" type="button">
            {tab}
          </button>
        ))}
      </div>
      <div className="currentContent">
        <CurrentCard temp={temp} location={location} />
        <div className="forcast-container">
          {sevenDayForcast.map((weather, index) => {
            const iconCode = weather.weather?.[0]?.icon || null;
            const iconURL = iconCode
              ? `http://openweathermap.org/img/wn/${iconCode}@2x.png`
              : null;

            return (
              <ForcastCard
                key={index}
                forcastTemp={weather.temp.day}
                forcastImg={iconURL}
                forcastDay={getDayOfWeek(weather.dt)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Current;
