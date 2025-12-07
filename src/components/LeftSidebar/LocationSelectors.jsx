const LocationSelectors = ({ selectedCity, setSelectedCity, selectedDistrict, setSelectedDistrict }) => {
    return (
        <>
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
        </>
    );
};

export default LocationSelectors;
