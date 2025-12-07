import { useState } from 'react';
import type { FilterState } from '../models';

export const useFilterState = (): FilterState => {
    const [propertyType, setPropertyType] = useState<'بيع' | 'إيجار'>('بيع');
    const [selectedCity, setSelectedCity] = useState<string>('الرياض');
    const [selectedDistrict, setSelectedDistrict] = useState<string>('الكل');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 25000]);
    const [areaRange, setAreaRange] = useState<[number, number]>([0, 25000]);
    const [showAdvancedFilters, setShowAdvancedFilters] = useState<boolean>(false);

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
