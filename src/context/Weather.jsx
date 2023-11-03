import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation, getForecastDataForCity, getForecastDataForLocation } from "../api/index";
const WeatherContext = createContext(null);

export const useWeather = () => {
  return useContext(WeatherContext);
};

export const WeatherProvider = (props) => {
  const [data, setData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [searchCity, setSearchCity] = useState(null);

  const fetchData = async () => {
    const response = await getWeatherDataForCity(searchCity);
    const responseForecast = await getForecastDataForCity(searchCity);
    setData(response);
    setForecastData(responseForecast)
  };

  const fetchCurrentUserLocationData = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeatherDataForLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setData(data));
      getForecastDataForLocation(
        position.coords.latitude,
        position.coords.longitude
      ).then((data) => setForecastData(data));
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        searchCity,
        data,
        forecastData,
        setSearchCity,
        fetchData,
        fetchCurrentUserLocationData,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
