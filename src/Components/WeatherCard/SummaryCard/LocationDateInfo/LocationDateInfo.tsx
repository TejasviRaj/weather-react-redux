import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../Reducers/rootReducer';
import getDay from '../../../../Helpers/getDay';
import getFormattedFullDate from '../../../../Helpers/getFormattedFullDate';
import './LocationDateInfo.css'

const LocationDateInfo = () => {
    const dt: number = useSelector((state: RootState) => state && state.weather && state.weather.daily && state?.weather?.daily[1].dt) || 0;
    const location: string | null = useSelector((state: RootState) => state.location.name)
    return (
        <div className="locDate-container">
            <h2 className="weekDay">{getDay(dt)}</h2>
            <span className="full-date">{getFormattedFullDate(dt)}</span>
            <i className="location-icon" data-feather="map-pin"></i>
            <span className="location"></span>
                       {location}
        </div>
    );
}

export default LocationDateInfo;