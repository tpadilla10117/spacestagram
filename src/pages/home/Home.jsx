import React from 'react';
import './Home.scss';
import { AstronomyCards, SearchBox, Pagination } from '../../components/utils';

const HomePage = (props) => {

    const {query, setQuery, astronomy, setAstronomy, apiKey, BASE_URL, search} = props;
    
    return (
        <main id="homepage-container">

            <SearchBox query={query} setQuery={setQuery} search={search}  />


            <article className='homepage-sections'>
                <div className='homepage-intro-container'>

                <h1 className='homepage-intro'>Welcome to Spacestagram!</h1>
                </div>

                {/* <AstronomyCards data={astronomy} setAstronomy={setAstronomy} apiKey={apiKey} BASE_URL={BASE_URL}/> */}

                {astronomy.length > 0 ? 
                    <Pagination data={astronomy} pageLimit={5} dataLimit={5} />

                :
                    
                    <AstronomyCards data={astronomy} setAstronomy={setAstronomy} apiKey={apiKey} BASE_URL={BASE_URL}/> 

                
                }

                
            </article>

            {/* <Pagination data={astronomy} pageLimit={5} dataLimit={10} /> */}

        </main>
    );
};

export default HomePage;