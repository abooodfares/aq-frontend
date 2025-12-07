import { useState } from 'react';

export const useFilterState = () => {
    const [propertyType, setPropertyType] = useState('بيع');
    const [selectedCity, setSelectedCity] = useState('الرياض');
    const [selectedDistrict, setSelectedDistrict] = useState('الكل');
    const [priceRange, setPriceRange] = useState([0, 25000]);
    const [areaRange, setAreaRange] = useState([0, 25000]);
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

    return {
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
    };
};
