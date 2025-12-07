import { useState } from 'react';
import type { SidebarState } from '../models';

export const useSidebarState = (): SidebarState => {
    const [leftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(true);
    const [rightSidebarOpen, setRightSidebarOpen] = useState<boolean>(true);

    const toggleLeftSidebar = (): void => setLeftSidebarOpen(!leftSidebarOpen);
    const toggleRightSidebar = (): void => setRightSidebarOpen(!rightSidebarOpen);

    return {
        leftSidebarOpen,
        rightSidebarOpen,
        toggleLeftSidebar,
        toggleRightSidebar
    };
};
