import React, {useState} from 'react';
import {AstronomyCards} from '../utils';
import './Pagination.scss';

const Pagination = ({ data, /* RenderComponent, */ pageLimit, dataLimit}) => {

const [pages] = useState(Math.round(data.length / dataLimit));
const [currentPage, setCurrentPage] = useState(1);

/* NextPage Button: */
function nextPage() {
    setCurrentPage( (page) => page + 1);
};

/* PreviousPage Button: */
function previousPage() {
    setCurrentPage( (page) => page - 1);
};

/* When a user clicks to change pages: */
function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
}

/* Returns posts equal to our limit (10) to return to user: */
const getPaginatedData = () => {
    const startingIdx = currentPage * dataLimit - dataLimit;
    const endIdx = startingIdx + dataLimit;

    return data.slice(startingIdx, endIdx); //posts on current pg
};

/* Show group of page numbers to user: */
const getPaginatedGroup = () => {
    let pageStart = Math.floor( (currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map( (_, idx) => pageStart + idx + 1);
};

console.log(data.length)

    return (
        <article id="pagination">
            <h1>{data.title}</h1>
            <section className='paginateddata-container'>
            {getPaginatedData().map( (data, idx) => (
                <AstronomyCards data={data} /* data={data} */ key={idx} />
            ))}
            </section>

            <div>
                <button onClick={previousPage} className={`pagination-prev ${currentPage === 1 ? 'disabled' : ''}`}>
                    <p>Prev</p>
                </button>

            {/* Get Paginated group: */}
                {getPaginatedGroup().map( (item, idx) => (
                    <button
                        key={idx}
                        onClick={changePage}
                        className={`paginationItem ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}


                <button onClick={nextPage} className={`pagination-next ${currentPage === pages ? 'disabled' : ''}`}>
                    <p>Next</p>
                </button>
            </div>

            
            
            
            
        </article>
    );
};

export default Pagination;
