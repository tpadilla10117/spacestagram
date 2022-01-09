import React from 'react';
import './AstronomyCards.scss';

function AstronomyCards() {
    return (
        <section id='astronomycard-container'>
            <article className='astronomycard'>
                <h1 className='atronomycard-heading'>
                Sample
                </h1>

                <img className='astronomycard-img' src="" alt=""/>

                <p className='astronomycard-details'>HEre is my details</p>
                <p></p>

                <button className='astronomycard-likebtn'>Like</button>


            </article>
        </section>
    );
}

export default AstronomyCards;
