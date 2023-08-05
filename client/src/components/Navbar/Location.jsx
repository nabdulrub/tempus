import { MdLocationOn } from "react-icons/md";
import { useEffect, useState } from "react";
import "./Location.css";
import { set } from "lodash";

const Location = ({ cityName, setCityName, location }) => {
  useEffect(() => {
    setCityName(cityName);
  }, [location]);

  return (
    <div className="locationWrapper">
      <MdLocationOn size={25} color="white" />
      <h1 className="Location">
        {cityName.name},
        <span className="secondLocation"> {cityName?.sys?.country}</span>
      </h1>
    </div>
  );
};

export default Location;
