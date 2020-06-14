import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../Reducers/rootReducer';
import IDaily from '../../../../Models/IDaily';
import getFormattedFullDate from '../../../../Helpers/getFormattedFullDate';
import './ForecastInfo.css';

const ForecastInfo = () => {
    const forecastInfoArray: IDaily[] | undefined = useSelector((state: RootState) => state.weather.daily?.slice(1,5));
    return (
        <div>
        <ul className="forecast">
            {
                forecastInfoArray && forecastInfoArray.map ((forecast, index) => (
                    <li className= {index ? 'forecastItem' : 'forecastItem active'}>
                    <img src= {`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt =""/>
                    <span className="day-name">{getFormattedFullDate(forecast.dt) } </span>
                    <span className="day-temp">{forecast.temp.day}°C</span>
                </li>
                ))
            }
        </ul>
    </div>
    );
}

export default ForecastInfo;