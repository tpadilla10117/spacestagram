import React, {useState, useRef, useEffect} from 'react';
import './AstronomyCards.scss';

function AstronomyCards(props) {

    const {date, url, copyright, title, explanation} = props.data;
    const likeBtnRef = useRef(null);

    const [likes, setLikes] = useState(() => {
        const saved = localStorage.getItem('likecount');
        const initialValue = JSON.parse(saved);
        return initialValue || 1;
    });

    const [liked, setLiked] = useState(() => {
        const saved = localStorage.getItem(`liked-state ${title}`);
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });

    const [likedBtn, setLikedBtn] = useState( () => {
        const saved = localStorage.getItem(`liked-btn ${title}`);
        const initialValue = JSON.parse(saved);
        return initialValue || null
    });

    /* const likeBtnData = [
        {
            id: 0
        }
    ]; */

    useEffect( () => {
console.log("from the useEff :", likeBtnRef.current.id/* .className */)
        /* if(likedBtn === `${props.idx} ${title}`) {
            handleLikeState();
        } */
    }, [likeBtnRef])

/* .astronomycard-likebtn functionality: */
    function onLikeClick() {
        setLikes( (num) => num + 1);
        console.log("Number of likes: ", likes)

        handleLikeState();
        
        /* persistLikeState();
        console.log("The index of the card :", props.idx) */
    };


/* "liked" state toggler -> if true, gets 'active' class: */
    function handleLikeState() {
        if(liked === false) {
            setLiked(true);
            setLikedBtn(`${title}`);
            localStorage.setItem(`liked-state ${title}`, JSON.stringify( (true) ) );
            /* localStorage.setItem('liked-state', true); */
            /* localStorage.setItem(`liked-btn ${props.idx} ${title}`, JSON.stringify(likeBtnRef.current.id)) */
        
        console.log(likeBtnRef.current)
            console.log("Value of liked ", liked)
            
            console.log("Name of the btn: ", likedBtn);
            
            /* localStorage.setItem(liked); */
        } else {
            setLiked(false);
            localStorage.removeItem(`liked-state ${title}`);
            localStorage.removeItem(`liked-btn ${title}`);
        }
    };
console.log(likedBtn)
console.log("Value of liked ", liked)
/* For persisting 'liked' state: */
    function persistLikeState() {
        if( likeBtnRef.current.className === "astronomycard-likebtn" ) {
            localStorage.setItem(`liked-state ${title}`, true);
        } /* else {
            localStorage.removeItem('liked-state', false)
        } */
    };
/* date=2004-06-09 */
/* date=2017-07-08 */
    /* function handleChange(event) {
        console.log("handleChange firing: ", event.target.value)
    } */

    /* useEffect( () => {
        if (liked === true) {

            localStorage.setItem(`liked-btn ${title}`, JSON.stringify(likeBtnRef.current.id))
        }
    }, [liked]) */

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
                
                <button ref={likeBtnRef} type="button" id={props.idx} className={liked /* || likedBtn */ ? 'astronomycard-likebtn active' : 'astronomycard-likebtn' /* || likedBtn === null ? 'astronomycard-likebtn' : 'astronomycard-likebtn active' */} onClick={onLikeClick}>   

                    <svg xmlns="http://www.w3.org/2000/svg" className="astronomycard-likebtn-heart" viewBox="0 0 20 20" fill="currentColor" height="20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>

                    <p className='astronomycard-likebtn-txt'>Like</p>
                </button>

                {/* {likeBtnData.map( (element, index) => {
                    return (
                        <button ref={likeBtnRef} key={index} data-key={index} id={index} type="button" className={liked ? 'astronomycard-likebtn active' : 'astronomycard-likebtn' } onClick={onLikeClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="astronomycard-likebtn-heart" viewBox="0 0 20 20" fill="currentColor" height="20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>

                            <p className='astronomycard-likebtn-txt'>Like</p>
                        </button>
                    )
                })} */}


            </article>
        </section>
    );
}

export default AstronomyCards;
