import React from 'react';

interface PropertyTypeToggleProps {
    propertyType: 'بيع' | 'إيجار';
    setPropertyType: (type: 'بيع' | 'إيجار') => void;
}

const PropertyTypeToggle: React.FC<PropertyTypeToggleProps> = ({ propertyType, setPropertyType }) => {
    return (
        <div className="filter-group">
            <div className="property-type-toggle">
                <button
                    className={propertyType === 'بيع' ? 'active' : ''}
                    onClick={() => setPropertyType('بيع')}
                >
                    بيع
                </button>
                <button
                    className={propertyType === 'إيجار' ? 'active' : ''}
                    onClick={() => setPropertyType('إيجار')}
                >
                    إيجار
                </button>
            </div>
        </div>
    );
};

export default PropertyTypeToggle;
