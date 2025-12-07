
import React from 'react';
import Map, { NavigationControl, Popup } from 'react-map-gl';
import PropertyMarker from './PropertyMarker';
import type { ViewState, Property } from '../../models/types';
import { useApp } from '../../context/AppContext';
import { getPlaceFromCoordinates } from '../../services/mapboxService';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const MapView: React.FC = () => {
    const { mapState } = useApp();
    const { viewState, setViewState, properties, addProperty, selectedProperty, setSelectedProperty } = mapState;

    return (
        <div className="map-container-main">
            <Map
                onClick={async (e) => {
                    // Check if popup is open/property selected, close it first
                    if (selectedProperty) {
                        setSelectedProperty(null);
                        return;
                    }

                    const { lng, lat } = e.lngLat;
                    let city = 'جاري التحميل...';
                    let district = '';

                    try {
                        const location = await getPlaceFromCoordinates(lng, lat);
                        if (location.city) city = location.city;
                        if (location.district) district = location.district;
                    } catch (error) {
                        city = 'غير معروف';
                    }

                    const newProperty: Property = {
                        id: Date.now(),
                        longitude: lng,
                        latitude: lat,
                        price: '📍',
                        type: 'apartment',
                        city: city,
                        district: district || 'غير محدد'
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
                    <PropertyMarker
                        key={property.id}
                        property={property}
                        onClick={() => setSelectedProperty(property)}
                    />
                ))}

                {selectedProperty && (
                    <Popup
                        longitude={selectedProperty.longitude}
                        latitude={selectedProperty.latitude}
                        anchor="top"
                        onClose={() => setSelectedProperty(null)}
                        closeOnClick={false}
                    >
                        <div style={{ padding: '8px', minWidth: '150px' }}>
                            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>{selectedProperty.price}</h3>
                            <p style={{ margin: 0, color: '#333', fontWeight: 'bold' }}>{selectedProperty.city} - {selectedProperty.district}</p>
                            <p style={{ margin: '4px 0 0 0', color: '#666' }}>Type: {selectedProperty.type}</p>
                            <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#999' }}>
                                Lat: {selectedProperty.latitude.toFixed(4)}, Lng: {selectedProperty.longitude.toFixed(4)}
                            </p>
                        </div>
                    </Popup>
                )}
            </Map>
        </div>
    );
};

export default MapView;
