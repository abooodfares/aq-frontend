import Map, { NavigationControl } from 'react-map-gl';
import PropertyMarker from './PropertyMarker';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const MapView = ({ viewState, setViewState, properties }) => {
    return (
        <div className="map-container-main">
            <Map
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
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
