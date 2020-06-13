import React from 'react';

const forecastInfoArray = [
    {
        date: 'Jun 13 2020',
        temp: '263.23',
        icon: '10n'
    },
    {
        date: 'Jun 14 2020',
        temp: '273.23',
        icon: '10n'
    },
    {
        date: 'Jun 15 2020',
        temp: '283.23',
        icon: '10n'
    },
    {
        date: 'Jun 16 2020',
        temp: '293.23',
        icon: '10n'
    },
    
]

const ForecastInfo = () => {
    return (
        <div>
        <ul className="forecast">
            {
                forecastInfoArray.map ((forecast, index) => (
                    <li className= {index ? 'forecastItem' : 'forecastItem active'}>
                    <img src= {`http://openweathermap.org/img/wn/${forecast.icon}.png`} alt =""/>
                    <span className="day-name">{forecast.date} </span>
                    <span className="day-temp">{forecast.temp}°C</span>
                </li>
                ))
            }
        </ul>
    </div>
    );
}

export default ForecastInfo;