import React from 'react';
import * as _ from 'lodash';
import { compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

import './Map.css';

const map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) => {
    // If loaded, show map
    if (props.results.length > 0) {
        return (
            <GoogleMap
                defaultZoom={11}
                defaultCenter={{ lat: props.coordinates.lat, lng: props.coordinates.lng }}
            >
                {_.map(props.results, function (result) {
                    return (
                        <Marker key={result.id} position={{ lat: result.coordinate[0], lng: result.coordinate[1] }} />
                    )
                })}

            </GoogleMap>
        )
    
    // If loading, show empty div
    } else {
        return (
            <div></div>
        )
    }
});

export default map;