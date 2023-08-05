import MapLocation from "./MapLocation";
import Yemen from "../../assets/yemen.png";

const Map = () => {
  return (
    <div className="w-full h-full bg-white col-span-3 row-start-2 rounded-3xl p-6">
      <MapLocation city="Yemen" flag={Yemen} />
    </div>
  );
};

export default Map;
