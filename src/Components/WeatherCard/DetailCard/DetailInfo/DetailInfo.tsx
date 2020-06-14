//Author-Tejasvi Raj Pant

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../Reducers/rootReducer';
import './DetailInfo.css'



const DetailInfo = () => {
    const pressure = useSelector((state: RootState) => state.weather.daily && state.weather.daily[1].pressure);
    const humidity = useSelector((state: RootState) => state.weather.daily && state.weather.daily[1].humidity);
    const windSpeed = useSelector((state: RootState) => state.weather.daily && state.weather.daily[1].wind_speed);


    const detailInfoArray = [
        {
            title: 'PRESSURE',
            value: `${pressure} hPa`
        },
        {
            title: 'HUMIDITY',
            value: `${humidity} %`
        },
        {
            title: 'WIND SPEED',
            value: `${windSpeed} meter/sec`
        },
    ]

    return (
        <div className="detail-info">
            {
                detailInfoArray.map(detailInfo => (
                    <div>
                        <span className="title">{detailInfo.title}</span>
                        <span className="value">{detailInfo.value}</span>
                        <div className="clear"></div>
                    </div>
                ))
            }

        </div>
    )
}

export default DetailInfo;