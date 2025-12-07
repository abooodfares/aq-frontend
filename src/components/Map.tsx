import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import { useApp } from '../context/AppContext';
import LeftSidebar from './LeftSidebar/LeftSidebar';
import RightSidebar from './RightSidebar/RightSidebar';
import MapView from './MapView/MapView';

const MapComponent: React.FC = () => {
    const { sidebarState } = useApp();

    return (
        <div className="real-estate-map">
            <RightSidebar />

            <MapView />

            <LeftSidebar />

            <button
                className="sidebar-toggle left"
                onClick={sidebarState.toggleLeftSidebar}
            >
                {sidebarState.leftSidebarOpen ? '◀' : '▶'}
            </button>

            <button
                className="sidebar-toggle right"
                onClick={sidebarState.toggleRightSidebar}
            >
                {sidebarState.rightSidebarOpen ? '▶' : '◀'}
            </button>
        </div>
    );
};

export default MapComponent;
