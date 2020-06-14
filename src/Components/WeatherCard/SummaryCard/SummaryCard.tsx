import React from 'react';
import LocationDateInfo from './LocationDateInfo/LocationDateInfo';
import WeatherInfo from './WeatherInfo/WeatherInfo';
import './SummaryCard.css';

const SummaryCard = () => {
    return (
        <div className="summary-card">
            <div className="gradient-background"></div>
            <LocationDateInfo />
            <WeatherInfo />
        </div>
    )
}

export default SummaryCard;