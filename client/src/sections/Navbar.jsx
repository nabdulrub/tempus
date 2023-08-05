import Location from "../components/Navbar/Location";
import Search from "../components/Navbar/Search";
import DegreeSwitch from "../components/Navbar/DegreeSwitch";
import "./Navbar.css";

const Navbar = ({
  setCity,
  city,
  cityName,
  setCityName,
  location,
  setUnit,
}) => {
  return (
    <div className="navbarContainer">
      <div className="location">
        <Location
          cityName={cityName}
          setCityName={setCityName}
          location={location}
        />
      </div>
      <div>
        <Search setCity={setCity} city={city} />
      </div>
      <div>
        <DegreeSwitch setUnit={setUnit} />
      </div>
    </div>
  );
};

export default Navbar;
