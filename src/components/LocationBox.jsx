import React from "react";
import './LocationBox.css';

/* This component renders the Location that will be queried in the SearchBox.jsx component: */
function LocationBox(props) {

    const {weather} = props;

/* Function to build the current date: */
    const dateBuilder = (d) => {
        const months = [ "January", "February", "March", "April", "May", "June", "July", "Auhust", "September" , "October", "November", "December"];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()]; //returns number between 0 - 11 
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    };

    return (
        <div className="location-box">
            <div className="location">
            {weather.name}, {weather.sys.country}
            </div>
            <div className="date">
                {dateBuilder( new Date() )}
            </div>
            
            
        </div>
    );
};

export default LocationBox;