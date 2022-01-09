import React from 'react';
import './WeatherBox.css';

/* This function contains the main temperature block in the UI:*/
function WeatherBox (props) {

    const {weather} = props;

    return (
        <div className="weather-box">
            <div className="temp">
                {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">
                {weather.weather[0].main}
            </div>

        </div>
    );
};

export default WeatherBox;