import React from "react";
import "./ForcastCard.css";

const ForcastCard = ({ forcastTemp, forcastImg, forcastDay }) => {
  return (
    <div className="forcast-card">
      <h3 className="forcast-day">{forcastDay}</h3>
      <span className="forcast-line"></span>
      <img src={forcastImg} alt="" className="forcast-img" />
      <h1 className="forcast-temp">
        {Math.round(forcastTemp)}
        <sup>°</sup>
      </h1>
    </div>
  );
};

export default ForcastCard;
