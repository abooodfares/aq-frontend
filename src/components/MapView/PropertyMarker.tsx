import React from 'react';
import { Marker } from 'react-map-gl';
import type { Property } from '../../models/types';

interface PropertyMarkerProps {
    property: Property;
}

const PropertyMarker: React.FC<PropertyMarkerProps> = ({ property }) => {
    return (
        <Marker
            longitude={property.longitude}
            latitude={property.latitude}
            anchor="bottom"
        >
            <div className="property-marker">
                <div className="price-tag">{property.price}</div>
            </div>
        </Marker>
    );
};

export default PropertyMarker;
