import React, { createContext, useContext, ReactNode } from 'react';
import { useMapState } from '../hooks/useMapState';
import { useFilterState } from '../hooks/useFilterState';
import { useSidebarState } from '../hooks/useSidebarState';
import { MapState, FilterState, SidebarState } from '../models/types';

interface AppContextType {
    mapState: MapState;
    filterState: FilterState;
    sidebarState: SidebarState;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const mapState = useMapState();
    const filterState = useFilterState();
    const sidebarState = useSidebarState();

    return (
        <AppContext.Provider value={{ mapState, filterState, sidebarState }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};
