import React from 'react';
import './AstronomyCards.scss';

function AstronomyCards(props) {

    const {astronomy} = props;

    return (
        <section id='astronomycard-container'>
            <article className='astronomycard'>
                <small className='astronomycard-id'>{astronomy.date}</small>
                <h1 className='atronomycard-heading'>{astronomy.title}</h1>

                <div className='astronomycard-img-container'> 
                    <img className='astronomycard-img' src={astronomy.url} alt=""/>
                </div>

                <p className='astronomycard-details'>{astronomy.explanation}</p>
                <h3 className='astronomycard-date'>{astronomy.date}</h3>

                <button className='astronomycard-likebtn'>Like</button>


            </article>
        </section>
    );
}

export default AstronomyCards;
