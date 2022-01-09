import React, {useState} from 'react';
import { HomePage} from './utils';

require('dotenv').config();

const apiKey = process.env.REACT_APP_ASTRONOMY_KEY;

console.log(process.env.REACT_APP_ASTRONOMY_KEY);
const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=';

function App() {

  const [query, setQuery] = useState('');
  const [astronomy, setAstronomy] = useState({});

/* To dynamically render astronomy data: */
  const search = event => {
    if(event.key === "Enter") {
      fetch(`${BASE_URL}${apiKey}&${query}`)
        .then(res => res.json() )
        .then(result => {
          setQuery('');
          setAstronomy(result);
          console.log("Here is astronomy data:", result);
        } );
    }
  };


  /* fetch(`${BASE_URL}api_key=${apiKey}&${query}`)
        .then(res => res.json() )
        .then(result => {
          setQuery('date=2014-10-01')
          setAstronomy(result);
          console.log("Here is astronomy data:", result);
        } ); */

  return (
    <div>

      <HomePage query={query} setQuery={setQuery} astronomy={astronomy} setAstronomy={setAstronomy} search={search}
        apiKey={apiKey}
        BASE_URL={BASE_URL}
      />

    </div>
  );
}

export default App;
