import { useState } from 'react';

export const useSidebarState = () => {
    const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
    const [rightSidebarOpen, setRightSidebarOpen] = useState(true);

    const toggleLeftSidebar = () => setLeftSidebarOpen(!leftSidebarOpen);
    const toggleRightSidebar = () => setRightSidebarOpen(!rightSidebarOpen);

    return {
        leftSidebarOpen,
        rightSidebarOpen,
        toggleLeftSidebar,
        toggleRightSidebar
    };
};
