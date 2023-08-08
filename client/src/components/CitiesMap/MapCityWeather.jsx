import "./MapLocation.css"

const MapCityWeather = ({ city, cityImg, degrees }) => {
  return (
    <div className="city-weather-container  p-x flex h-full w-full  flex-col items-center justify-between rounded-2xl bg-blue-200 pb-2">
      <div className="w-full rounded-tl-2xl rounded-tr-2xl bg-blue-300 py-2">
        <h2 className="text-center text-sm font-bold">Current Weather</h2>
      </div>
      <div className="flex w-full items-center justify-between gap-4 p-4">
        <div class="flex flex-col items-center justify-center">
          <h2>{city}</h2>
          <img src={cityImg} alt="" className="w-[50px]" />
        </div>
        <h2 className="text-4xl font-bold">
          {degrees}
          <sup>°</sup>
        </h2>
      </div>
    </div>
  )
}

export default MapCityWeather
