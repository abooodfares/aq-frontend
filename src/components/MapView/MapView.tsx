import React from 'react';
import Map, { NavigationControl } from 'react-map-gl';
import PropertyMarker from './PropertyMarker';
import type { ViewState, Property } from '../../models/types';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

import { useApp } from '../../context/AppContext';

const MapView: React.FC = () => {
    const { mapState } = useApp();
    const { viewState, setViewState, properties, addProperty } = mapState;
    return (
        <div className="map-container-main">
            <Map
                onClick={(e) => {
                    const { lng, lat } = e.lngLat;
                    const newProperty: Property = {
                        id: Date.now(),
                        longitude: lng,
                        latitude: lat,
                        price: 'New Listing',
                        type: 'apartment' // Default type
                    };
                    addProperty(newProperty);
                }}
                

                {...viewState}
                onMove={evt => setViewState(evt.viewState as ViewState)}
                mapStyle="mapbox://styles/mapbox/light-v11"
                mapboxAccessToken={MAPBOX_TOKEN}
                style={{ width: '100%', height: '100%' }}
            >
                <NavigationControl position="bottom-right" />

                {properties.map((property) => (
                    <PropertyMarker key={property.id} property={property} />
                ))}
            </Map>
        </div>
    );
};

export default MapView;
