export interface Property {
    id: number;
    longitude: number;
    latitude: number;
    price: string;
    type: 'villa' | 'apartment' | 'land' | 'commercial';
}

export interface PropertyFilter {
    propertyType: 'بيع' | 'إيجار';
    city: string;
    district: string;
    priceRange: [number, number];
    areaRange: [number, number];
}

export interface ViewState {
    longitude: number;
    latitude: number;
    zoom: number;
}

export interface MenuItem {
    label: string;
    icon: string;
    href?: string;
}

export interface FilterState {
    propertyType: 'بيع' | 'إيجار';
    setPropertyType: (type: 'بيع' | 'إيجار') => void;
    selectedCity: string;
    setSelectedCity: (city: string) => void;
    selectedDistrict: string;
    setSelectedDistrict: (district: string) => void;
    priceRange: [number, number];
    setPriceRange: (range: [number, number]) => void;
    areaRange: [number, number];
    setAreaRange: (range: [number, number]) => void;
    showAdvancedFilters: boolean;
    setShowAdvancedFilters: (show: boolean) => void;
}

export interface MapState {
    viewState: ViewState;
    setViewState: (state: ViewState) => void;
    properties: Property[];
    addProperty: (property: Property) => void;
    removeProperty: (id: number) => void;
}

export interface SidebarState {
    leftSidebarOpen: boolean;
    rightSidebarOpen: boolean;
    toggleLeftSidebar: () => void;
    toggleRightSidebar: () => void;
}
