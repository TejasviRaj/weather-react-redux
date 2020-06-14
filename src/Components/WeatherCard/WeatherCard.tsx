//Author-Tejasvi Raj Pant

import React from 'react';
import SummaryCard from './SummaryCard/SummaryCard'
import DetailCard from './DetailCard/DetailCard';
const WeatherCard = () => {
    return (
        <div className="main-container">
            <div className="card-container">
                <SummaryCard />
                <DetailCard />              
            </div>
        </div>
    );
}

export default WeatherCard;