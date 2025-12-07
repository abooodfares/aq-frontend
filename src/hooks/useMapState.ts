import { useState } from 'react';
import type { MapState, Property, ViewState } from '../models';

export const useMapState = (): MapState => {
    const [viewState, setViewState] = useState<ViewState>({
        longitude: 46.6753,
        latitude: 24.7136,
        zoom: 13
    });

    const [properties] = useState<Property[]>([
        { id: 1, longitude: 46.6753, latitude: 24.7136, price: '2.5 مليون', type: 'villa' },
        { id: 2, longitude: 46.6853, latitude: 24.7236, price: '1.8 مليون', type: 'apartment' },
        { id: 3, longitude: 46.6653, latitude: 24.7036, price: '3.2 مليون', type: 'villa' },
        { id: 4, longitude: 46.6953, latitude: 24.7336, price: '1.2 مليون', type: 'apartment' },
    ]);

    return {
        viewState,
        setViewState,
        properties
    };
};
