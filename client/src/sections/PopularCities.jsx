import React, { useState, useEffect } from "react";
import { fetchPopularCity } from "../api/popularCitiesApi";
import PopularCity from "../components/Popular/PopularCity";

const PopularCities = ({ unit }) => {
  const cities = [{ city: "Tokyo" }, { city: "New York" }, { city: "Cairo" }];
  const [cityCollections, setCityCollections] = useState([]);

  const fetchCities = async () => {
    try {
      const fetchedCities = await Promise.all(
        cities.map(async (city) => {
          const cityData = await fetchPopularCity(city.city, unit);
          return cityData;
        })
      );
      setCityCollections(fetchedCities);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      {cityCollections.map((city, index) => {
        const iconCode = city.weather[0]?.icon || null;
        const iconURL = iconCode
          ? `http://openweathermap.org/img/wn/${iconCode}@2x.png`
          : null;

        return (
          <PopularCity
            city={city.name}
            country={city.sys.country}
            currently={city.weather[0].description}
            degrees={Math.round(city.main.temp)}
            cityImg={iconURL}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default PopularCities;
