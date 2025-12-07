import React from 'react';
import { Marker } from 'react-map-gl';
import type { Property } from '../../models/types';

interface PropertyMarkerProps {
    property: Property;
    onClick: () => void;
}

const PropertyMarker: React.FC<PropertyMarkerProps> = ({ property, onClick }) => {
    return (
        <Marker
            longitude={property.longitude}
            latitude={property.latitude}
            anchor="bottom"
            onClick={(e) => {
                // Prevent map click from firing when clicking marker
                e.originalEvent.stopPropagation();
                onClick();
            }}
        >
            <div className="property-marker">
                <div className="price-tag">{property.price}</div>
            </div>
        </Marker>
    );
};

export default PropertyMarker;
