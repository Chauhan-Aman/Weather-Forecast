import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../api/geoapi";
import Button from "./Button";
import { useWeather } from "../context/Weather";

const Search = () => {
    const [search, setSearch] = useState(null);

    const weather = useWeather();

    const loadOptions = async (inputValue) => {
        try {
            const response = await fetch(
                `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
                geoApiOptions
            );
            if (response.ok) {
                const data = await response.json();
                return {
                    options: data.data.map((city) => ({
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    })),
                };
            } else {
                // Handle unsuccessful response
                console.error('Request failed with status:', response.status);
                return { options: [] }; // Return empty options array in case of failure
            }
        } catch (error) {
            console.error('Error during request:', error);
            return { options: [] }; // Return empty options array in case of error
        }
    };


    const handleOnChange = (searchData) => {
        // console.log(searchData)
        setSearch(searchData);
        weather.setSearchCity(searchData.label)
    };

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: '5px',
            border: '2px solid #ccc',
            boxShadow: state.isFocused ? '0 0 0 2px #D2AE6D' : null,
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#D2AE6D' : null,
            color: state.isFocused ? 'white' : null,
        }),
    }

    return (
        <>
            <AsyncPaginate
                placeholder="Search for City"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
                styles={customStyles}
            />
            <Button onClick={weather.fetchData} value="Search" />
        </>
    );
};

export default Search;