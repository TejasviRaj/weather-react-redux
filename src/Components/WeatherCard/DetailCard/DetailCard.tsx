import React from 'react';
import DetailInfo from './DetailInfo/DetailInfo';
import ForeCastInfo from './ForecastInfo/ForecastInfo';

const DetailCard = () => {
        return (
            <div className="detail-card">
            <DetailInfo />
            <ForeCastInfo />
           
        </div>
        );
}

export default DetailCard;