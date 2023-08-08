// Hooks & Functions
import { useEffect, useState } from "react"
import { fetchWeatherData } from "../../api/weatherApi"

// Data & Images
import { mapCities } from "../../data/mapData"
import { TbHandClick } from "react-icons/tb"

// Components
import MapLocation from "./MapLocation"
import MapCityWeather from "./MapCityWeather"

const Map = ({ unit }) => {
  const [city, setCity] = useState(null)
  const [temperature, setTemperature] = useState(null)
  const [icon, setIcon] = useState(null)
  const [fade, setFade] = useState(false)

  const fetchMapWeather = async (city) => {
    const cityData = await fetchWeatherData(city, unit)

    setCity(cityData.name)
    setTemperature(Math.round(cityData.main?.temp))
    setIcon(cityData?.weather?.[0]?.icon)
    setFade(true)
  }

  useEffect(() => {
    fetchMapWeather()
  }, [unit])

  const iconURL = icon
    ? `http://openweathermap.org/img/wn/${icon}@2x.png`
    : null

  return (
    <div className="relative col-span-3 row-start-2 h-full w-full overflow-hidden rounded-3xl bg-[#1B1A1D] bg-world-map bg-cover bg-center bg-no-repeat p-6">
      <div className="absolute right-4 top-4 shadow-xl">
        <div className="flex w-fit cursor-pointer items-center justify-center gap-2 rounded-2xl bg-white p-2 transition-all hover:scale-105">
          <TbHandClick size={25} /> <span>Click for weather</span>
        </div>
      </div>
      <div>
        {mapCities.map((city, index) => (
          <MapLocation
            key={index}
            city={city.name}
            flag={city.flag}
            onClick={fetchMapWeather}
          />
        ))}
      </div>
      {city ? (
        <div
          className={`absolute bottom-2 left-2 transition-all duration-300 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <MapCityWeather city={city} cityImg={iconURL} degrees={temperature} />
        </div>
      ) : null}
    </div>
  )
}

export default Map
