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
            {/* Top Navigation Bar */}
            <div className="main-navbar">
                <div className="navbar-right">
                    <button
                        className="sidebar-toggle-btn"
                        onClick={sidebarState.toggleRightSidebar}
                        aria-label="Toggle Menu"
                    >
                        {/* Menu Icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                    <div className="navbar-logo">
                        <h1>عقاراتي</h1>
                    </div>
                </div>

                <div className="navbar-center">
                    {/* Search Form / Filters could go here if needed, or just keep them in left sidebar.
                        User asked for "form in top page like navbar". 
                        I will simplify the left sidebar and maybe move some "quick search" here?
                        For now, let's keep the filter button here to toggle the full form.
                    */}
                </div>

                <div className="navbar-left">
                    <button
                        className="sidebar-toggle-btn"
                        onClick={sidebarState.toggleLeftSidebar}
                        aria-label="Toggle Filters"
                    >
                        {/* Filter Icon */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                    </button>
                </div>
            </div>

            <RightSidebar />

            <MapView />

            <LeftSidebar />

            {/* Remove old floating buttons */}
        </div>
    );
};

export default MapComponent;
