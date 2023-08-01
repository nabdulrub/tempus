import Location from "./Location";
import Search from "./Search";
import DegreeSwitch from "./DegreeSwitch";
import "./Navbar.css";

const Navbar = ({ setCity, city, location }) => {
  return (
    <div className="navbarContainer">
      <div className="location">
        <Location location={location} />
      </div>
      <div>
        <Search setCity={setCity} city={city} />
      </div>
      <div>
        <DegreeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
