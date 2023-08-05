import { useState, useEffect } from "react";
import { getLocation } from "../api/fetchGeolocation";
const Geolocation = ({ setLat, setLon, lat, lon }) => {
  const [status, setStatus] = useState(null);

  const fetchLocation = getLocation(setStatus, setLat, setLon);

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div>
      <button className="text-white" onClick={fetchLocation}>
        Get Location
      </button>
    </div>
  );
};

export default Geolocation;
