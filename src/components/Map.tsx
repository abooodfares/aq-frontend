import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import { useMapState } from '../hooks/useMapState';
import { useFilterState } from '../hooks/useFilterState';
import { useSidebarState } from '../hooks/useSidebarState';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import MapView from './MapView/MapView';

const MapComponent: React.FC = () => {
    const mapState = useMapState();
    const filterState = useFilterState();
    const sidebarState = useSidebarState();

    return (
        <div className="real-estate-map">
            <LeftSidebar
                isOpen={sidebarState.leftSidebarOpen}
                toggleSidebar={sidebarState.toggleLeftSidebar}
                filterState={filterState}
            />

            <MapView
                viewState={mapState.viewState}
                setViewState={mapState.setViewState}
                properties={mapState.properties}
            />

            <RightSidebar
                isOpen={sidebarState.rightSidebarOpen}
                toggleSidebar={sidebarState.toggleRightSidebar}
            />
        </div>
    );
};

export default MapComponent;
