import React from "react";
import './SearchBox.css';

/* This component contains the Searchbar in the UI: */
function SearchBox(props) {

    const {query, setQuery,search} = props;

    return (
        <div className="search-box">
            
            <input 
                type="text"
                className="search-bar"
                placeholder="Search..."
                onChange={event => setQuery(event.target.value)}
                value={query}
                onKeyPress={search}
            />
        </div>
    );
};

export default SearchBox;