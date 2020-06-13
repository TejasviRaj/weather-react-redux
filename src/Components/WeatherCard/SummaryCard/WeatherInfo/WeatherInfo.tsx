import React from 'react'

const WeatherInfo = () => {
    return (
        <div className="weather-container">
        <i className="weather-icon" data-feather="sun"></i>
        <h1 className="temperature">33°C</h1>
        <h3 className="description">Thunderstorm</h3>
    </div> 
    );
}

export default WeatherInfo;