import { useState, useEffect } from 'react';

export const useSidebarState = () => {
    const [leftSidebarOpen, setLeftSidebarOpen] = useState(window.innerWidth >= 768);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(window.innerWidth >= 768);

    const toggleLeftSidebar = () => setLeftSidebarOpen(!leftSidebarOpen);
    const toggleRightSidebar = () => setRightSidebarOpen(!rightSidebarOpen);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setLeftSidebarOpen(true);
                setRightSidebarOpen(true);
            } else {
                setLeftSidebarOpen(false);
                setRightSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        leftSidebarOpen,
        rightSidebarOpen,
        toggleLeftSidebar,
        toggleRightSidebar
    };
};
