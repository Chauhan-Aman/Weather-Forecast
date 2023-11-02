import { useEffect } from "react";
import { useWeather } from "./context/Weather";

import "./App.css";
import CurrentForecastCard from "./components/CurrentForecastCard";
import FutureForeCastCard from "./components/FutureForeCastCard";

function App() {
  const weather = useWeather();
  // console.log(weather);

  useEffect(() => {
    // Get Current Location
    weather.fetchCurrentUserLocationData();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="weather-container">
        <div className="inner-container CurrentForecastCard ">
          <CurrentForecastCard />
        </div>
        <div className="inner-container FutureForeCastCard">
          <FutureForeCastCard />
        </div>
      </div>


    </>
  );
}

export default App;
