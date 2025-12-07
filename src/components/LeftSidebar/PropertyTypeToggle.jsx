const PropertyTypeToggle = ({ propertyType, setPropertyType }) => {
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
