import React from 'react';

const SummaryCard = () => {
    return (
        <div className="summary-card">
            <div className="gradient-background"></div>
            <div className="locDate-container">
                <h2 className="weekDay">Friday</h2>
                <span className="full-date">16 Aug 2020</span>
                <i className="location-icon" data-feather="map-pin"></i>
                <span className="location"></span>
                                Ktm, NP
            </div>
            <div className="weather-container">
                <i className="weather-icon" data-feather="sun"></i>
                <h1 className="temperature">33°C</h1>
                <h3 className="description">Thunderstorm</h3>
            </div>
        </div>
    )
}

export default SummaryCard;