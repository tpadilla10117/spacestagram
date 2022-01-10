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

useEffect(() => {
  fetch(`${BASE_URL}${apiKey}`)
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error('An Error occurred when fetching posts');
    })
    .then((posts) => setAstronomy(posts))
    .catch((error) => setError(error.message));
}, []);

console.log(astronomy);
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
