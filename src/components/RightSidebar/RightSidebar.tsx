import React from 'react';
import NavigationMenu from './NavigationMenu';
import SidebarFooter from './SidebarFooter';

import { useApp } from '../../context/AppContext';

const RightSidebar: React.FC = () => {
    const { sidebarState } = useApp();
    const { rightSidebarOpen: isOpen } = sidebarState;

    return (
        <div className={`right-sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-content">
                <NavigationMenu />
                <SidebarFooter />
            </div>


        </div>
    );
};

export default RightSidebar;
