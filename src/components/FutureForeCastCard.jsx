import React from 'react'
import { useWeather } from "../context/Weather";

const FutureForeCastCard = () => {

    const weather = useWeather();

    return (
        <>
            <div className='weather-forecast-card date-card'>Date: {weather?.forecastData?.forecast?.forecastday[0]?.date}</div>
            <p className='texts forecast-headings'>Astro :</p>
            <div className="forecast-container">
                <div className='texts weather-forecast-card value-card '>Sunrise: {weather?.forecastData?.forecast?.forecastday[0]?.astro?.sunrise}</div>
                <div className='texts weather-forecast-card value-card '>Sunset: {weather?.forecastData?.forecast?.forecastday[0]?.astro?.sunset}</div>
                <div className='texts weather-forecast-card value-card '>Moonrise: {weather?.forecastData?.forecast?.forecastday[0]?.astro?.moonrise}</div>
                <div className='texts weather-forecast-card value-card '>Moonset: {weather?.forecastData?.forecast?.forecastday[0]?.astro?.moonset}</div>
                <div className='texts weather-forecast-card value-card-grtr '>Moon Phase: {weather?.forecastData?.forecast?.forecastday[0]?.astro?.moon_phase}</div>
            </div>

            <p className='texts forecast-headings'>Condition :</p>
            <div className="forecast-container ">
                <div className='texts weather-forecast-card value-card '>Weather: {weather?.forecastData?.forecast?.forecastday[0]?.day?.condition?.text}
                    <img src={weather?.forecastData?.forecast?.forecastday[0]?.day?.condition?.icon} alt='condition' /></div>
                <div className="forecast-inner-container">
                    <div className='texts weather-forecast-card value-card '>RainChance: {weather?.forecastData?.forecast?.forecastday[0]?.day?.daily_chance_of_rain}</div>
                    <div className='texts weather-forecast-card value-card '>SnowChance: {weather?.forecastData?.forecast?.forecastday[0]?.day?.daily_chance_of_snow}</div>
                </div>
            </div>

            <p className='texts forecast-headings'>Temperature :</p>
            <div className="forecast-container">
                <div className='texts weather-forecast-card value-card '>AvgHumidity: {weather?.forecastData?.forecast?.forecastday[0]?.day?.avghumidity}</div>
                <div className='texts weather-forecast-card value-card '>AvgTemp &#176; C: {weather?.forecastData?.forecast?.forecastday[0]?.day?.avgtemp_c}</div>
                <div className='texts weather-forecast-card value-card '>AvgTemp &#176; F: {weather?.forecastData?.forecast?.forecastday[0]?.day?.avgtemp_f}</div>
                <div className='texts weather-forecast-card value-card '>Max Wind(kph): {weather?.forecastData?.forecast?.forecastday[0]?.day?.maxwind_kph}</div>
                <div className='texts weather-forecast-card value-card-grtr '>Avg Visibility(km): {weather?.forecastData?.forecast?.forecastday[0]?.day?.avgvis_km}</div>
            </div>
        </>
    )
}

export default FutureForeCastCard