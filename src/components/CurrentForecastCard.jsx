import React from 'react';
import Card from "./Card";
import Search from "./Search";
// import Input from "./components/Input";
import Button from "./Button";
import ForeCastCard from "./ForeCastCard";

const CurrentForecastCard = () => {
    return (
        <>
            <h1 className="heading">Weather Forecast</h1>
            <div className="input-container">
                {/* <Input />
          <Button onClick={weather.fetchData} value="Search" /> */}
                <Search />
            </div>
            <Card />
            <ForeCastCard />
            <Button value="Refresh" onClick={() => window.location.reload(false)} />
        </>
    )
}

export default CurrentForecastCard