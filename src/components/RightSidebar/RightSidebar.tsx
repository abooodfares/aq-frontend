import React from 'react';
import NavigationMenu from './NavigationMenu';
import SidebarFooter from './SidebarFooter';

interface RightSidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ isOpen, toggleSidebar }) => {
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
