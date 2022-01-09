import React from 'react';
import './Home.scss';
import { AstronomyCards, SearchBox } from '../../components/utils';

const HomePage = (props) => {

    const {query, setQuery, astronomy, setAstronomy, apiKey, BASE_URL, search} = props;
    
    return (
        <main id="homepage-container">

            <SearchBox query={query} setQuery={setQuery} search={search}  />
            <AstronomyCards />

        </main>
    );
};

export default HomePage;