import { useState } from 'react';
import type { MapState, Property, ViewState } from '../models/types';

export const useMapState = (): MapState => {
    const [viewState, setViewState] = useState<ViewState>({
        longitude: 46.6753,
        latitude: 24.7136,
        zoom: 13
    });

    const [properties, setProperties] = useState<Property[]>([]);

    const addProperty = (property: Property) => {
        setProperties((prev) => [...prev, property]);
    };

    const removeProperty = (id: number) => {
        setProperties((prev) => prev.filter((p) => p.id !== id));
    };

    return {
        viewState,
        setViewState,
        properties,
        addProperty,
        removeProperty
    };
};
