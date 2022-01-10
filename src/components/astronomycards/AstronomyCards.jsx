import React from 'react';
import './AstronomyCards.scss';

function AstronomyCards(props) {

    const {astronomy} = props;

    return (
        <section id='astronomycard-container'>
            <article className='astronomycard'>
                <small className='astronomycard-id'>{astronomy.date}</small>

                <section className='astronomycard-img-container'> 

                    <figure className='astronomycard-img-wrapper'>
                        <img className='astronomycard-img' src={astronomy.url} alt=""/>

                    </figure>

                    <figcaption className='astronomycard-copyright-container'>
                        <p className='astronomycard-copyright'>© {astronomy.copyright}</p>
                    </figcaption>

                </section>

                <h1 className='atronomycard-heading'>{astronomy.title}</h1>
                <h3 className='astronomycard-date'>{astronomy.date}</h3>

                <p className='astronomycard-details'>{astronomy.explanation}</p>
                
                <button className='astronomycard-likebtn'>
                    <p className='astronomycard-likebtn-txt'>Like</p>
                </button>


            </article>
        </section>
    );
}

export default AstronomyCards;
