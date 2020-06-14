//Author-Tejasvi Raj Pant

import React from 'react';

const detailInfoArray = [
    {
        title: 'PRECIPITATION',
        value: '0 %'
    },
    {
        title: 'HUMIDITY',
        value: '34 %'
    },
    {
        title: 'WIND',
        value: '0 km/h'
    },
]

const DetailInfo = () => {
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