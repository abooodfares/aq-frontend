const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

export interface LocationData {
    city: string;
    district: string;
}

export const getPlaceFromCoordinates = async (lng: number, lat: number): Promise<LocationData> => {
    try {
        const response = await fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${MAPBOX_TOKEN}&types=place,neighborhood,locality&language=ar`
        );

        if (!response.ok) {
            throw new Error(`Mapbox API error: ${response.statusText}`);
        }

        const data = await response.json();

        // Initialize with null or empty, caller can decide defaults
        let city = '';
        let district = '';

        if (data.features) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            data.features.forEach((feature: any) => {
                if (feature.place_type.includes('place')) {
                    city = feature.text;
                }
                if (feature.place_type.includes('neighborhood') || feature.place_type.includes('locality')) {
                    district = feature.text;
                }
            });
        }

        return { city, district };
    } catch (error) {
        console.error("Reverse geocoding failed", error);
        throw error;
    }
};
