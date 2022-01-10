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

                    <div className='astronomycard-img-wrapper'>
                        <img className='astronomycard-img' src={astronomy.url} alt=""/>

                    </div>

                    <div className='astronomycard-copyright-container'>
                        <p className='astronomycard-copyright'>{astronomy.copyright}</p>
                    </div>

                </div>

                <p className='astronomycard-details'>{astronomy.explanation}</p>
                <h3 className='astronomycard-date'>{astronomy.date}</h3>

                <button className='astronomycard-likebtn'>
                    <p className='astronomycard-likebtn-txt'>Like</p>
                </button>


            </article>
        </section>
    );
}

export default AstronomyCards;
