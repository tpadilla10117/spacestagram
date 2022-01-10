import React, {useState, useEffect} from 'react';
import './AstronomyCards.scss';

function AstronomyCards(props) {

    const {date, url, copyright, title, explanation} = props.data;

    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

/* .astronomycard-likebtn functionality: */
    function onLikeClick() {
        setLikes( (num) => num + 1);
        handleLikeState();
        /* persistLikeState(); */
    };


/* "liked" state toggler: */
    function handleLikeState() {
        if(liked === false) {
            setLiked(true);
            /* localStorage.setItem(liked); */
        } else {
            setLiked(false);
        }
    };

/* For persisting 'liked' state: */
    function persistLikeState(card) {
        if( card.hasClass("active") ) {
            localStorage.setItem('liked-state', true);
        } else {
            localStorage.removeItem('liked-state', false)
        }
    };

    /* function handleChange(event) {
        console.log("handleChange firing: ", event.target.value)
    } */


/* console.log("Any index? : ",props.idx ) */
    return (
        <section id='astronomycard-container'>
            <article className='astronomycard'>
                <small className='astronomycard-id'>{date}</small>

                <section className='astronomycard-img-container'> 

                    <figure className='astronomycard-img-wrapper'>
                        <img className='astronomycard-img' src={url} alt=""/>

                    </figure>

                    <figcaption className='astronomycard-copyright-container'>
                        <p className='astronomycard-copyright'> {copyright ? `© ${copyright}` : '' }</p>
                    </figcaption>

                </section>

                <h1 className='atronomycard-heading'>{title}</h1>
                <h3 className='astronomycard-date'>{date}</h3>

                <p className='astronomycard-details'>{explanation}</p>
                
                <button type="button" id={props.idx} className={liked ? 'astronomycard-likebtn active' : 'astronomycard-likebtn' } onClick={onLikeClick}>
                    <p className='astronomycard-likebtn-txt'>Like</p>
                </button>


            </article>
        </section>
    );
}

export default AstronomyCards;
