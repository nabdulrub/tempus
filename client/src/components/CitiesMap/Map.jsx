import MapLocation from "./MapLocation";
import Bangkok from "../../assets/Bangkok.png";
import Dubai from "../../assets/Dubai.png";
import London from "../../assets/London.png";
import Moscow from "../../assets/Moscow.png";
import Mumbai from "../../assets/Mumbai.png";
import Paris from "../../assets/Bangkok.png";
import Rome from "../../assets/Rome.png";
import Toronto from "../../assets/Rome.png";

const Map = () => {
  const mapCities = [
    { name: "Paris", flag: Paris },
    { name: "London", flag: London },
    { name: "Rome", flag: Rome },
    { name: "Dubai", flag: Dubai },
    { name: "Toronto", flag: Toronto },
    { name: "Mumbai", flag: Mumbai },
    { name: "Moscow", flag: Moscow },
    { name: "Bangkok", flag: Bangkok },
  ];

  return (
    <div className="w-full h-full bg-white col-span-3 row-start-2 rounded-3xl p-6 relative">
      {mapCities.map((city, index) => (
        <MapLocation key={index} city={city.name} flag={city.flag} />
      ))}
    </div>
  );
};

export default Map;
