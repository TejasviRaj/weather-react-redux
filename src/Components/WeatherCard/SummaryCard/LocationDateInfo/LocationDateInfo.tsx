import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../Reducers/rootReducer';

const LocationDateInfo = () => {
    const location: string | null = useSelector((state: RootState) => state.location.name)
    return (
        <div className="locDate-container">
            <h2 className="weekDay">Friday</h2>
            <span className="full-date">16 Aug 2020</span>
            <i className="location-icon" data-feather="map-pin"></i>
            <span className="location"></span>
                       {location}
        </div>
    );
}

export default LocationDateInfo;