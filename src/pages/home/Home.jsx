import React from 'react';
import './Home.scss';
import { AstronomyCards } from '../../components/utils';

const HomePage = (props) => {

    const {query, setQuery, astronomy, setAstronomy, apiKey, BASE_URL} = props;
    
    return (
        <main id="homepage-container">

            
            <AstronomyCards />

        </main>
    );
};

export default HomePage;