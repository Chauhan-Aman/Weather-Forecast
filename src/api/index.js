const baseURL = "https://api.weatherapi.com/v1/current.json?key=f577aaf1208f4e7e9d825104230211";
const baseURLForecast = "https://api.weatherapi.com/v1/forecast.json?key=f577aaf1208f4e7e9d825104230211";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
};

export const getForecastDataForCity = async (city) => {
  const response = await fetch(`${baseURLForecast}&q=${city}&aqi=yes`);
  return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};

export const getForecastDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURLForecast}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};