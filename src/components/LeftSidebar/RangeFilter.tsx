import React from 'react';

interface RangeFilterProps {
    label: string;
    range: [number, number];
    setRange: (range: [number, number]) => void;
    showLabel?: boolean;
}

const RangeFilter: React.FC<RangeFilterProps> = ({ label, range, setRange, showLabel = true }) => {
    return (
        <div className="filter-group range-filter">
            {showLabel && <label>Range</label>}
            <div className="range-inputs">
                <input
                    type="number"
                    value={range[0]}
                    onChange={(e) => setRange([+e.target.value, range[1]])}
                />
                <span>-</span>
                <input
                    type="number"
                    value={range[1]}
                    onChange={(e) => setRange([range[0], +e.target.value])}
                />
            </div>
            <input
                type="range"
                min="0"
                max="50000"
                value={range[1]}
                onChange={(e) => setRange([range[0], +e.target.value])}
                className="range-slider"
            />
            <div className="range-labels">
                <span>{label}</span>
                <span>{range[1]}</span>
            </div>
        </div>
    );
};

export default RangeFilter;
