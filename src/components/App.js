import React, {useState, useEffect} from 'react';
import { HomePage} from './utils';

require('dotenv').config();

const apiKey = process.env.REACT_APP_ASTRONOMY_KEY;

const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=';

function App() {

  const [query, setQuery] = useState('');
  const [astronomy, setAstronomy] = useState({}); // My posts
  const [error, setError] = useState('');

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

/* Main API fetch call: */

/* useEffect(() => {
  fetch(`${BASE_URL}${apiKey}`)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error('something went wrong while requesting posts');
    })
    .then((posts) => setAstronomy(posts))
    .catch((error) => setError(error.message));
}, []); */


 /*  fetch(`${BASE_URL}${apiKey}&${query}`)
        .then(res => res.json() )
        .then(result => {
          setQuery('date=2014-10-01')
          setAstronomy(result);
          console.log("Here is astronomy data:", result);
        } ); */

  return (
    <div className='App'>

      <HomePage query={query} setQuery={setQuery} astronomy={astronomy} setAstronomy={setAstronomy}
        apiKey={apiKey}
        BASE_URL={BASE_URL}
        search={search}
      />

    </div>
  );
}

export default App;
