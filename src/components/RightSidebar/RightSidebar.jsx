import NavigationMenu from './NavigationMenu';
import SidebarFooter from './SidebarFooter';

const RightSidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`right-sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-content">
                <NavigationMenu />
                <SidebarFooter />
            </div>

            <button
                className="sidebar-toggle right"
                onClick={toggleSidebar}
            >
                {isOpen ? '▶' : '◀'}
            </button>
        </div>
    );
};

export default RightSidebar;
