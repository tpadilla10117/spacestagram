import React from 'react';
import './Home.scss';
import { AstronomyCards, SearchBox, Pagination } from '../../components/utils';

const HomePage = (props) => {

    const {query, setQuery, astronomy, setAstronomy, apiKey, BASE_URL, search} = props;
/* console.log(astronomy) */
    
    return (
        <main id="homepage-container">

            <SearchBox query={query} setQuery={setQuery} search={search}  />

            <div className='homepage-sections'>
                {/* <AstronomyCards data={astronomy} setAstronomy={setAstronomy} apiKey={apiKey} BASE_URL={BASE_URL}/> */}

                {astronomy.length > 0 ? 
                    <Pagination data={astronomy} pageLimit={5} dataLimit={10} />

                :
                
                    <h1>No Additional Data to Display</h1>
                
                }
            </div>

            {/* <Pagination data={astronomy} pageLimit={5} dataLimit={10} /> */}

        </main>
    );
};

export default HomePage;