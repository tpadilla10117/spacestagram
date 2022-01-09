import React from 'react';

import { SearchBox, LocationBox, WeatherBox } from '../../components/utils';
import './Home.css';

const HomePage = (props) => {

    const {query, setQuery, weather, setWeather, search, apiKey, BASE_URL} = props;

    return (
        <main>
            <SearchBox query={query} setQuery={setQuery} weather={weather} setWeather={setWeather} search={search} apiKey={apiKey} BASE_URL={BASE_URL}/>

            { (typeof weather.main != "undefined") ? (
            
                <LocationBox query={query} setQuery={setQuery} weather={weather} setWeather={setWeather} search={search} apiKey={apiKey} BASE_URL={BASE_URL}/> 

            ) : ('') }

            { (typeof weather.main != "undefined") ? (
            
                <WeatherBox  query={query} setQuery={setQuery} weather={weather} setWeather={setWeather} search={search} apiKey={apiKey} BASE_URL={BASE_URL}/>

            ) : ('') }

        </main>
    );
};

export default HomePage;