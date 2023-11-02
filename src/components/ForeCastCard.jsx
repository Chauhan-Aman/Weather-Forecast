import React from 'react'
import { useWeather } from '../context/Weather'

const ForeCastCard = () => {

    const weather = useWeather();

    return (
        <>
            <div className='texts airquality'>
                <p className='airq-index'><span className='text-head'>AirQuality:</span></p>
                <p className='airq-index'><span className='text-head'>CO:</span> {weather?.data?.current?.air_quality?.co}</p>
                <p className='airq-index'><span className='text-head'>NO2:</span> {weather?.data?.current?.air_quality?.no2}</p>
                <p className='airq-index'><span className='text-head'>O3:</span> {weather?.data?.current?.air_quality?.o3}</p>
                <p className='airq-index'><span className='text-head'>SO2:</span> {weather?.data?.current?.air_quality?.so2}</p>
                <p className='airq-index'><span className='text-head'>PM2_5:</span> {weather?.data?.current?.air_quality?.pm2_5}</p>
            </div>

            <div className="forecast-card-container">
                <div className="forecast-card">
                    <div className='texts'><span className='text-head'>Temp &#176; C:</span> {weather?.data?.current?.temp_c}</div>
                    <div className='texts'><span className='text-head'>Feels Like Temp &#176; C:</span> {weather?.data?.current?.feelslike_c}</div>
                    <div className='texts'><span className='text-head'>Humidity:</span> {weather?.data?.current?.humidity}</div>
                    <div className='texts'><span className='text-head'>Wind Gust(kph):</span> {weather?.data?.current?.gust_kph}</div>
                    <div className='texts'><span className='text-head'>Visibility(km):</span> {weather?.data?.current?.vis_km}</div>
                </div>
                <div className="forecast-card">
                    <div className='texts'><span className='text-head'>Temp &#176; F:</span> {weather?.data?.current?.temp_f}</div>
                    <div className='texts'><span className='text-head'>Feels Like Temp &#176; F:</span> {weather?.data?.current?.feelslike_f}</div>
                    <div className='texts'><span className='text-head'>Wind Direction:</span> {weather?.data?.current?.wind_dir}</div>
                    <div className='texts'><span className='text-head'>Wind Gust(mph):</span> {weather?.data?.current?.gust_mph}</div>
                    <div className='texts'><span className='text-head'>Visibility(miles):</span> {weather?.data?.current?.vis_miles}</div>
                </div>
            </div>
            <p className='texts last-update'>Last Updated: {weather?.data?.current?.last_updated}</p>
        </>
    )
}

export default ForeCastCard