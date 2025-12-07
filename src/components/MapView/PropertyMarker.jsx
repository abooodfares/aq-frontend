import { Marker } from 'react-map-gl';

const PropertyMarker = ({ property }) => {
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
