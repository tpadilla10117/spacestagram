import React, {useState} from 'react'

function Pagination({ data, RenderComponent, title, pageLimit, dataLimit}) {

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

    return (
        <section>
            <h1>Title</h1>
            
        </section>
    );
};

export default Pagination;
