import React from 'react';

import './ListItem.css';

const listItem = (props) => {
    let resultPrice = null;

    // Check what prices are available
    if (props.result.hour_price && !props.result.day_price) {
        resultPrice = (
            <div className="listItem-detail">
                €{props.result.hour_price}/hour
            </div>
        );
    } else if (!props.result.hour_price && props.result.day_price) {
        resultPrice = (
            <div className="listItem-detail">
                €{props.result.day_price}/day
            </div>
        );
    } else if (props.result.hour_price && props.result.day_price) {
        resultPrice = (
            <div className="listItem-detail">
                €{props.result.hour_price}/hour - €{props.result.day_price}/day
            </div>
        );
    }

    return (
        <div className="col-sm-12 col-lg-6 col-xl-4">
            <div className="listItem-container">
                <img className="listItem-image" alt="Venue" src={props.result.image_urls[0]} />
                <div className="listItem-title">{props.result.name}</div>
                <div className="listItem-detail"><span className="fa fa-map-marker" />&nbsp;{props.result.location_city} - {props.result.location_name}</div>
                {resultPrice}
            </div>
        </div>
    )
};

export default listItem;