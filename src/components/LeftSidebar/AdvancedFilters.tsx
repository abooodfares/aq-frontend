import React from 'react';

interface AdvancedFiltersProps {
    showAdvancedFilters: boolean;
    setShowAdvancedFilters: (show: boolean) => void;
}

const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({ showAdvancedFilters, setShowAdvancedFilters }) => {
    return (
        <>
            {/* Advanced Filters Toggle */}
            <div className="filter-group">
                <div className="advanced-toggle">
                    <span>تصفيات متقدمة</span>
                    <label className="toggle-switch">
                        <input
                            type="checkbox"
                            checked={showAdvancedFilters}
                            onChange={(e) => setShowAdvancedFilters(e.target.checked)}
                        />
                        <span className="toggle-slider"></span>
                    </label>
                </div>
            </div>

            {/* Advanced Search Section */}
            {showAdvancedFilters && (
                <div className="advanced-filters">
                    <h3>البحث المتقدم</h3>
                    <div className="date-filters">
                        <div className="date-row">
                            <select><option>Year</option></select>
                            <select><option>Mo</option></select>
                            <select><option>Day</option></select>
                        </div>
                        <div className="date-row">
                            <select><option>Year</option></select>
                            <select><option>Mo</option></select>
                            <select><option>Day</option></select>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AdvancedFilters;
