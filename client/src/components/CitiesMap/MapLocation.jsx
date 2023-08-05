import "./MapLocation.css";

const MapLocation = ({ city, flag }) => {
  return (
    <div className="map-location flex flex-col items-center justify-center rounded-3xl relative w-[35px] h-[35px] shadow-black cursor-pointer transition-all hover:scale-110">
      <img className="w-[100%]" src={flag} alt="" />
      <h2 className="text-xs">{city}</h2>
    </div>
  );
};

export default MapLocation;
