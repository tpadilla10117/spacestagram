import React, {useState} from 'react';
import { HomePage} from './utils';

require('dotenv').config();

const apiKey = process.env.REACT_APP_WEATHER_KEY;

/* console.log(process.env); */
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

/* To dynamically render weather data: */
  const search = event => {
    if(event.key === "Enter") {
      fetch(`${BASE_URL}/weather?q=${query}&units=metric&APPID=${apiKey}`)
        .then(res => res.json() )
        .then(result => {
          setQuery('');
          setWeather(result);
          console.log("Here is the weather:", result);
        } );
    }
  };


  return (
    <div className={ (typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'App warm' : 'App') : 'App' }>

      <HomePage query={query} setQuery={setQuery} weather={weather} setWeather={setWeather} search={search}
        apiKey={apiKey}
        BASE_URL={BASE_URL}
      />

    </div>
  );
}

export default App;
