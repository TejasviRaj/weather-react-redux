import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../../../Reducers/rootReducer';
import capitalizeFirstLetter from '../../../../Helpers/capitalizeFirstLetter';
import './WeatherInfo.css';

const WeatherInfo = () => {
    const temp: number | null = useSelector((state: RootState) => state.weather.daily && state.weather.daily[1].temp.day);
    const weatherDescription: string = useSelector((state: RootState) => state.weather.daily && state.weather.daily[1].weather[0].description) ?? '';

    return (
        <div className="weather-container">
        <i className="weather-icon" data-feather="sun"></i>
    <h1 className="temperature">{temp}°C</h1>
        <h3 className="description">{capitalizeFirstLetter(weatherDescription)}</h3>
    </div> 
    );
}

export default WeatherInfo;