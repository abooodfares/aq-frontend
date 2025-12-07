import React from 'react';

interface LocationSelectorsProps {
    selectedCity: string;
    setSelectedCity: (city: string) => void;
    selectedDistrict: string;
    setSelectedDistrict: (district: string) => void;
}

const LocationSelectors: React.FC<LocationSelectorsProps> = ({
    selectedCity,
    setSelectedCity,
    selectedDistrict,
    setSelectedDistrict
}) => {
    return (
        <>
            <div className="location-row">
                {/* City Selection */}
                <div className="filter-group">
                    <label>المدينة</label>
                    <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                        <option>الرياض</option>
                        <option>جدة</option>
                        <option>الدمام</option>
                    </select>
                </div>

                {/* District Selection */}
                <div className="filter-group">
                    <label>الحي</label>
                    <select value={selectedDistrict} onChange={(e) => setSelectedDistrict(e.target.value)}>
                        <option>الكل</option>
                        <option>العليا</option>
                        <option>الملقا</option>
                        <option>النخيل</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default LocationSelectors;
