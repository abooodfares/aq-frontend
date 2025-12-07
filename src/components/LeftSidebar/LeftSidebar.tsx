import React from 'react';
import PropertyTypeToggle from './PropertyTypeToggle';
import LocationSelectors from './LocationSelectors';
import RangeFilter from './RangeFilter';
import AdvancedFilters from './AdvancedFilters';
import type { FilterState } from '../../models/types';

import { useApp } from '../../context/AppContext';

const LeftSidebar: React.FC = () => {
    const { filterState, sidebarState } = useApp();
    const { leftSidebarOpen: isOpen } = sidebarState;

    const {
        propertyType,
        setPropertyType,
        selectedCity,
        setSelectedCity,
        selectedDistrict,
        setSelectedDistrict,
        priceRange,
        setPriceRange,
        areaRange,
        setAreaRange,
        showAdvancedFilters,
        setShowAdvancedFilters
    } = filterState;

    return (
        <div className={`left-sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="sidebar-content">
                <PropertyTypeToggle
                    propertyType={propertyType}
                    setPropertyType={setPropertyType}
                />

                <LocationSelectors
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                    selectedDistrict={selectedDistrict}
                    setSelectedDistrict={setSelectedDistrict}
                />

                <RangeFilter
                    label="السعر"
                    range={priceRange}
                    setRange={setPriceRange}
                />

                <RangeFilter
                    label="المساحة"
                    range={areaRange}
                    setRange={setAreaRange}
                    showLabel={false}
                />

                <AdvancedFilters
                    showAdvancedFilters={showAdvancedFilters}
                    setShowAdvancedFilters={setShowAdvancedFilters}
                />

                <button className="search-btn" style={{ marginTop: '20px' }}>ابحث الآن</button>
            </div>


        </div>
    );
};

export default LeftSidebar;
