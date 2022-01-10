import React, {useState} from 'react';
import './AstronomyCards.scss';

function AstronomyCards(props) {

    const {date, url, copyright, title, explanation} = props.data;

    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

/* .astronomycard-likebtn functionality: */
    function onLikeClick() {
        console.log("Clicked");
        setLikes( (num) => num + 1);
        console.log("Num of likes: ", likes);


        /* When you click the btn, can un-like it - btn in 'un-like' state */


        /* When you click it in the un-liked stated, becomes a 'liked' state */
    };

    return (
        <section id='astronomycard-container'>
            <article className='astronomycard'>
                <small className='astronomycard-id'>{date}</small>

                <section className='astronomycard-img-container'> 

                    <figure className='astronomycard-img-wrapper'>
                        <img className='astronomycard-img' src={url} alt=""/>

                    </figure>

                    <figcaption className='astronomycard-copyright-container'>
                        <p className='astronomycard-copyright'>© {copyright}</p>
                    </figcaption>

                </section>

                <h1 className='atronomycard-heading'>{title}</h1>
                <h3 className='astronomycard-date'>{date}</h3>

                <p className='astronomycard-details'>{explanation}</p>
                
                <button className='astronomycard-likebtn' onClick={onLikeClick}>
                    <p className='astronomycard-likebtn-txt'>Like</p>
                </button>


            </article>
        </section>
    );
}

export default AstronomyCards;
