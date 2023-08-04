import { MdLocationOn } from "react-icons/md";
import { useEffect, useState } from "react";
import "./Location.css";

const Location = ({ location }) => {
  const [currentLocation, setCurrentLocation] = useState(location.name);

  const currentPlace = location.name;

  useEffect(() => {
    setCurrentLocation(location.name);
  }, [currentPlace]);
  return (
    <div className="locationWrapper">
      <MdLocationOn size={25} color="white" />
      <h1 className="Location">
        {currentLocation},
        <span className="secondLocation"> {location.sys?.country}</span>
      </h1>
    </div>
  );
};

export default Location;
