import React from 'react';
import PropertyTypeToggle from './PropertyTypeToggle';
import LocationSelectors from './LocationSelectors';
import RangeFilter from './RangeFilter';
import AdvancedFilters from './AdvancedFilters';
import type { FilterState } from '../../models';

interface LeftSidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
    filterState: FilterState;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({
    isOpen,
    toggleSidebar,
    filterState
}) => {
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

                <button className="search-btn">ابحث الآن</button>

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
            </div>


        </div>
    );
};

export default LeftSidebar;
