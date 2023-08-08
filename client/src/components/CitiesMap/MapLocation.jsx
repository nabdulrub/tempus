import "./MapLocation.css"

const MapLocation = ({ city, onClick, flag, ...props }) => {
  const handleOnClick = () => {
    if (onClick) {
      onClick(city)
    }
  }

  return (
    <div
      className="map-location relative flex h-[35px] w-[35px] cursor-pointer flex-col items-center justify-center rounded-3xl shadow-black transition-all hover:scale-110"
      onClick={handleOnClick}
      {...props}
    >
      <img className="w-[100%]" src={flag} alt="" />
      <h2 className="text-xs uppercase text-white">{city}</h2>
    </div>
  )
}

export default MapLocation
